import {
  MotionSensor,
  SurveillanceController,
  VideoRecorder,
} from '../../../core/08-kata-video-surveillance/surveillanceController';

describe('The Surveillance Controller', () => {
  it('asks the recorder to stop recording when the sensor detects no motion', () => {
    const sensor = new StubSensorDetectingNoMotion();
    const recorder = new SpyRecorder();
    const controller = new SurveillanceController(sensor, recorder);

    controller.recordMotion();

    expect(recorder.stopCalled).toBeTruthy();
  });

  it('asks the recorder to start recording when the sensor detects motion', () => {
    const sensor = new StubSensorDetectingMotion();
    const recorder = new SpyRecorder();
    const controller = new SurveillanceController(sensor, recorder);

    controller.recordMotion();

    expect(recorder.startCalled).toBeTruthy();
  });
});

class StubSensorDetectingNoMotion implements MotionSensor {
  isDetectingMotion(): boolean {
    return false;
  }
}

class StubSensorDetectingMotion implements MotionSensor {
  isDetectingMotion(): boolean {
    return true;
  }
}

class SpyRecorder implements VideoRecorder {
  startCalled = false;
  stopCalled = false;
  startRecording(): void {
    this.startCalled = true;
  }
  stopRecording(): void {
    this.stopCalled = true;
  }
}
