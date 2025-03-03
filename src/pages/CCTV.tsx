import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import WebcamSidebarContent from "../components/Sidebar";
import MainLayout from "../layouts/Main";
import { CustomWebcam } from "../styles/Customs";
const CCTV: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [fps, setFps] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [events, setEvents] = useState<
    { timestamp: string; message: string }[]
  >([]);
  const [storageUsed, setStorageUsed] = useState(0);
  const [motionDetected, setMotionDetected] = useState(false);
  const [videoConstraints, setVideoConstraints] = useState({
    width: 1920,
    height: 1080,
    facingMode: "user",
  });
  const [mirror, setMirror] = useState(false);
  const [audio, setAudio] = useState(false);
  const [control, setControl] = useState(false);
  // Log events with timestamps
  const logEvent = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setEvents((prev) => [{ timestamp, message }, ...prev].slice(0, 10));
  };

  // Calculate FPS (simulate for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(Math.random() * 10) + 25); // Simulate 25-35 FPS
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate storage usage increase
  useEffect(() => {
    const interval = setInterval(() => {
      setStorageUsed((prev) => {
        const newValue = prev + 0.01;
        return newValue > 100 ? 100 : newValue;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate occasional motion detection
  useEffect(() => {
    const interval = setInterval(() => {
      const detected = Math.random() > 0.7;
      if (detected && !motionDetected) {
        logEvent("Motion detected");
      }
      setMotionDetected(detected);
    }, 8000);
    return () => clearInterval(interval);
  }, [motionDetected]);

  // Apply styles to webcam when settings change
  useEffect(() => {
    if (webcamRef && webcamRef.current) {
      const videoElement = webcamRef.current?.video as HTMLVideoElement;
      if (videoElement) {
        videoElement.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
      }
    }
  }, [brightness, contrast, webcamRef]);

  // Add some initial events
  useEffect(() => {
    logEvent("Camera initialized");
    logEvent("Recording settings: 720p, 30fps");
  }, []);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();

    console.log(imageSrc);
  }, [webcamRef]);
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-9 relative">
          <div className="absolute top-2 left-2 z-10">
            <h1 className="">Camera-01</h1>
          </div>
          <CustomWebcam
            mirrored={mirror}
            videoConstraints={videoConstraints}
            controls={control}
            audio={audio}
            ref={webcamRef}
            className="object-cover  bg-no-repeat bg-center bg-cover min-w-full min-h-screen shadow-lg rounded-md"
          />
        </div>
        {/* <div className="absolute bottom-2 py-1 w-full bg-white/30 backdrop-blur-sm ">
              <div className="px-4">
                <ul className="flex gap-4 justify-center">
                  <WebcamButton shape="circle">
                    <Camera size={20} />
                  </WebcamButton>
                  <WebcamButton shape="circle">
                    <VideoCamera size={20} />
                  </WebcamButton>
                  <WebcamButton shape="circle">
                    <Microphone size={20} />
                  </WebcamButton>
                  <WebcamButton shape="circle">
                    <Sliders size={20} />
                  </WebcamButton>
                  <WebcamButton shape="circle">
                    <XCircle size={20} />
                  </WebcamButton>
                </ul>
              </div>
            </div> */}
        <div className=" col-span-3 ">
          <div
            style={{
              height: "100vh",
            }}
            className=" bg-white border border-[#d9d9d9]  rounded-lg p-2 [box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] z-0 overflow-auto"
          >
            <WebcamSidebarContent
              fps={fps}
              brightness={brightness}
              setBrightness={setBrightness}
              contrast={contrast}
              setContrast={setContrast}
              events={events}
              storageUsed={storageUsed}
              motionDetected={motionDetected}
              videoConstraints={videoConstraints}
              setVideoConstraints={setVideoConstraints}
              audio={audio}
              setAudio={setAudio}
              control={control}
              setControl={setControl}
              capture={capture}
              mirror={mirror}
              setMirror={setMirror}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CCTV;
