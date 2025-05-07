const MEDIA_CONTENT_TYPES = {
  VIDEO: "VIDEO",
  AUDIO: "AUDIO",
  TEXT: "TEXT",
};

const FILE_EXTENSION_TO_TYPE = {
  mp4: MEDIA_CONTENT_TYPES.VIDEO,
  mp3: MEDIA_CONTENT_TYPES.AUDIO,
  json: MEDIA_CONTENT_TYPES.TEXT,
};

/**
 * Determines the content type based on the file extension extracted from the URL.
 *
 * @param {string} url - The URL of the content.
 * @returns {VIDEO|AUDIO|TEXT} - The inferred content type (replace with your actual enum).
 */
function getContentType(url) {
  const parts = url.split(".");
  const fileExtension = parts[parts.length - 1].toLowerCase(); // Extract and lowercase the file extension

  return FILE_EXTENSION_TO_TYPE[fileExtension];
}

/**
 * Placeholder function for fetching text content.
 *
 * (Replace this function with your actual implementation for fetching text content)
 *
 * @param {string} textUrl - The URL of the text content.
 * @returns {string} - The fetched text content (placeholder implementation returns the URL).
 */
const fetchTextContent = (textUrl) => textUrl;

/**
 * This class represents a content object with associated playback functionalities.
 */
class Player {
  /**
   * Title of the content.
   */
  title;

  /**
   * URL of the content.
   */
  contentUrl;

  /**
   * Reference to the chosen player instance for this content.
   */
  player;

  /**
   * Creates a new Player instance for the provided content.
   *
   * @param {string} title - The title of the content.
   * @param {string} contentUrl - The URL of the content.
   */
  constructor(title, contentUrl) {
    this.title = title;
    this.contentUrl = contentUrl;
    this.player = null; // Initialize player lazily
  }

  /**
   * Starts playback of the content.
   *
   * The player instance is chosen based on the content URL and automatically
   * handles playback logic for the specific content type (video, audio, text).
   */

  play() {
    if (!this.player) {
      // Determine player type based on contentUrl (replace with your logic)
      const contentType = getContentType(this.contentUrl);
      switch (contentType) {
        case MEDIA_CONTENT_TYPES.VIDEO:
          this.player = new VideoPlayer(this.contentUrl);
          break;
        case MEDIA_CONTENT_TYPES.AUDIO:
          this.player = new AudioPlayer(this.contentUrl);
          break;
        case MEDIA_CONTENT_TYPES.TEXT:
          this.player = new TextFileReader(fetchTextContent(this.contentUrl)); // Fetch text content
          break;
        default:
          console.error("Unsupported content type:", contentType);
      }
    }
    if (this.player) {
      this.player.play();
    }
  }

  /**
   * Pauses playback of the content.
   */
  pause() {
    if (this.player) {
      this.player.pause();
    }
  }

  /**
   * Stops playback of the content and resets the playback position.
   */
  stop() {
    if (this.player) {
      this.player.stop();
    }
  }

  /**
   * Seeks to a specific position in the content (optional).
   *
   * Not all content types support seeking (e.g., text content).
   */
  seek() {
    if (this.player) {
      this.player.seek();
    }
  }
}

module.exports = Player;
