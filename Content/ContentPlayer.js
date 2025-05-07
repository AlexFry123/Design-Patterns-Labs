/**
 * Interface defining the basic functionalities for content playback.
 */
class ContentPlayer {
  /**
   * Starts playback of the content.
   */
  play() {}

  /**
   * Pauses playback of the content.
   */
  pause() {}

  /**
   * Stops playback of the content and resets the playback position.
   */
  stop() {}

  /**
   * Seeks to a specific position in the content (optional).
   *
   * @param {number} position - The target position within the content.
   */
  seek(position) {}
}

class VideoPlayer extends ContentPlayer {
  /**
   * Reference to a mock video element for demonstration purposes.
   *
   *
   */
  videoElement = {
    src: null,
    currentTime: 0,
    play: () => {
      console.log("Video played");
    },
    pause: () => {
      console.log("Video paused");
    },
    stop: () => {
      console.log("Video stopped");
    },
  };

  /**
   * Creates a new VideoPlayer instance for the provided video URL.
   *
   * @param {string} videoUrl - The URL of the video content.
   */
  constructor(videoUrl) {
    super();
    this.videoElement.src = videoUrl;
  }

  /**
   * Starts playback of the video.
   *
   * @inheritdoc
   */
  play() {
    this.videoElement.play();
  }

  /**
   * Pauses playback of the video.
   *
   * @inheritdoc
   */
  pause() {
    this.videoElement.pause();
  }

  /**
   * Stops playback of the video and resets the playback time.
   *
   * @inheritdoc
   */
  stop() {
    this.videoElement.currentTime = 0;
    this.videoElement.stop();
  }

  /**
   * Seeks to a specific position in the video.
   *
   * @param {number} position - The target position (in seconds) within the video.
   *
   * @inheritdoc
   */
  seek(position) {
    this.videoElement.currentTime = position;
    console.log("Video seek");
  }
}

/**
 * A concrete player class for text content.
 */
class TextFileReader extends ContentPlayer {
  /**
   * The text content to be displayed or read aloud.
   */
  textContent;

  /**
   * Creates a new TextFileReader instance for the provided text content.
   *
   * @param {string} textContent - The text content to be played.
   */
  constructor(textContent) {
    super();
    this.textContent = textContent;
  }

  /**
   * Simulates "playing" text content (e.g., display or read aloud).
   *
   * @inheritdoc
   */
  play() {
    console.log("Displaying text content:", this.textContent);
  }

  /**
   * Not applicable for text content.
   *
   * @inheritdoc
   */
  pause() {
    // No action needed
  }

  /**
   * Not applicable for text content.
   *
   * @inheritdoc
   */
  stop() {
    // No action needed
  }

  /**
   * Not applicable for text content (optional).
   *
   * @inheritdoc
   */
  seek(position) {
    // No seeking functionality for text
  }
}

/**
 * A concrete player class for audio content.
 */
class AudioPlayer extends ContentPlayer {
  /**
   * Reference to a mock audio element for demonstration purposes.
   *
   * (Replace this with your actual implementation using an audio element from the DOM).
   */
  audioElement = {
    src: null,
    currentTime: 0,
    play: () => {
      console.log("Audio played");
    },
    pause: () => {
      console.log("Audio paused");
    },
    stop: () => {
      console.log("Audio stopped");
    },
  };

  /**
   * Creates a new AudioPlayer instance for the provided audio URL.
   *
   * @param {string} audioUrl - The URL of the audio content.
   */
  constructor(audioUrl) {
    super();
    this.audioElement.src = audioUrl;
  }

  /**
   * Starts playback of the audio.
   *
   * @inheritdoc
   */
  play() {
    this.audioElement.play();
  }

  /**
   * Pauses playback of the audio.
   *
   * @inheritdoc
   */
  pause() {
    this.audioElement.pause();
  }

  /**
   * Stops playback of the audio and resets the playback time.
   *
   * @inheritdoc
   */
  stop() {
    this.audioElement.currentTime = 0; // Reset playback time
    this.audioElement.pause();
  }

  /**
   * Seeks to a specific position in the audio.
   *
   * @param {number} position - The target position (in seconds) within the audio.
   *
   * @inheritdoc
   */
  seek(position) {
    this.audioElement.currentTime = position;
    console.log("Audio seek");
  }
}

module.exports = { AudioPlayer, ContentPlayer, TextFileReader, VideoPlayer };
