# Interactive Storytelling Web App

An interactive storytelling web application that allows users to create, share, and experience narrative-driven stories with branching paths. Users can craft their own stories using a drag-and-drop interface, engage with the community, and share content on social media.

## Features

- Feature 1
- Feature 2

## User Stories

This section describes typical workflows within the application to help new developers understand how users interact with the system:

### Story Creation

1. **User Login**
   - Users log into their account or create a new one.
   
2. **Story Drafting**
   - Navigate to the story creation page using the interface's "Create New Story" button.
   - Use the drag-and-drop interface to add elements like characters, settings, and plot points.
   
3. **Branching Paths**
   - Define branching paths by creating decision nodes where users can choose different outcomes.

4. **Publishing**
   - Once satisfied with the story draft, click "Publish" to make it available for others to read or share.

### Story Consumption

1. **Browse Stories**
   - Users explore a library of stories categorized by genres and themes.
   
2. **Read and Interact**
   - Select a story to begin reading. At decision points, users select options that determine the next part of the narrative.

3. **Feedback and Sharing**
   - Leave feedback on stories or share them on social media platforms directly from within the app.

## API Endpoints

Below is a detailed reference of all available API endpoints for interacting with our web application programmatically:

### Authentication

- `POST /api/v1/auth/login`
  - Description: Authenticates a user and returns an access token.
  - Request Example:
    ```json
    {
      "username": "user@example.com",
      "password": "securepassword123"
    }
    ```
  - Response Example:
    ```json
    {
      "token": "abc123def456ghi789jkl"
    }
    ```

### Stories

- `GET /api/v1/stories`
  - Description: Retrieves a list of all available stories.
  - Response Example:
    ```json
    [
      {"id": 1, "title": "Adventure in the Enchanted Forest"},
      {"id": 2, "title": "Mystery at the Old Mansion"}
    ]
    ```

- `POST /api/v1/stories`
  - Description: Creates a new story.
  - Request Example:
    ```json
    {
      "title": "New Story Title",
      "author_id": 1,
      "content": "Once upon a time..."
    }
    ```
  - Response Example:
    ```json
    {
      "id": 3,
      "message": "Story created successfully"
    }
    ```

- `GET /api/v1/stories/{storyId}`
  - Description: Fetches details of a specific story by its ID.
  - Response Example:
    ```json
    {
      "id": 1,
      "title": "Adventure in the Enchanted Forest",
      "author_id": 2,
      "content": "In a magical forest..."
    }
    ```

### Diagrams

To aid understanding, consider including diagrams that illustrate key processes such as user flows for story creation and consumption, or API interactions. These can be added as links to images stored within the repository.

---

This expanded documentation will enhance understanding of our application's capabilities, making it easier for new developers to contribute effectively.