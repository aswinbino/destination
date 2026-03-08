import cv2
import dlib
import numpy as np
from scipy.spatial import distance as dist
import requests
import time

"""
DELIVERABLE [A] - AI DRIVER MONITORING LAYER: Drowsiness Detection
Project DESTINATION - Face Authentication + Safety Check
"""

# Constants for EAR (Eye Aspect Ratio)
EAR_THRESHOLD = 0.25
CONSEC_FRAMES = 6  # If EAR < 0.25 for 6+ frames, trigger DROWSY
ADMIN_ALERT_URL = "http://localhost:5000/api/safety/face-check" # Node API to forward to Socket.IO

def calculate_ear(eye):
    """Calculate the Eye Aspect Ratio."""
    A = dist.euclidean(eye[1], eye[5])
    B = dist.euclidean(eye[2], eye[4])
    C = dist.euclidean(eye[0], eye[3])
    ear = (A + B) / (2.0 * C)
    return ear

def process_frame(frame, detector, predictor, frame_counter, driver_id):
    """Process a single frame for drowsiness detection."""
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = detector(gray, 0)
    
    alert_status = "SAFE"
    
    for face in faces:
        shape = predictor(gray, face)
        shape_coords = np.zeros((68, 2), dtype=int)
        
        for i in range(0, 68):
            shape_coords[i] = (shape.part(i).x, shape.part(i).y)
            
        left_eye = shape_coords[36:42]
        right_eye = shape_coords[42:48]
        
        left_ear = calculate_ear(left_eye)
        right_ear = calculate_ear(right_eye)
        
        ear = (left_ear + right_ear) / 2.0
        
        if ear < EAR_THRESHOLD:
            frame_counter += 1
            if frame_counter >= CONSEC_FRAMES:
                alert_status = "DROWSY"
                cv2.putText(frame, "DROWSY ALERT!", (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
                
                # Send telemetry alert to Node.js / Admin Dashboard
                try:
                    requests.post(ADMIN_ALERT_URL, json={
                        "driverId": driver_id,
                        "type": "DROWSINESS",
                        "timestamp": time.time(),
                        "severity": "high"
                    })
                except Exception as e:
                    pass # Ignore connection errors for demo wrapper
                    
        else:
            frame_counter = 0 # Reset
            
        cv2.putText(frame, f"EAR: {ear:.2f}", (300, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
                    
    return frame, frame_counter, alert_status

def monitor_driver(driver_id="driver-123"):
    """Main function to launch OpenCV Driver Monitoring"""
    print("Project DESTINATION - Fast AI Drowsiness Detection Engine Started...")
    detector = dlib.get_frontal_face_detector()
    try:
        predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
    except RuntimeError:
        print("Note for Demo: Please download 'shape_predictor_68_face_landmarks.dat' to run OpenCV natively.")
        return

    cap = cv2.VideoCapture(0)
    frame_counter = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        frame, frame_counter, status = process_frame(frame, detector, predictor, frame_counter, driver_id)
        
        cv2.imshow("DESTINATION - AI Driver Safety Cam", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
            
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    monitor_driver()
