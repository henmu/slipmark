# Data Model

Slipmark stores information as structured data rather than traditional browser bookmarks. Every saved item is an **Entry**, which can be categorized using one or more **Labels**.

## Entry

An Entry represents a single saved item, such as a movie, TV show, manga, game, website, recipe, or any other resource the user wants to keep track of.

| Field      | Type             | Description                                                                                         |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| `id`       | `string`         | Unique identifier for the entry.                                                                    |
| `title`    | `string`         | Human-readable title of the entry.                                                                  |
| `url`      | `string`         | Original source URL. This may become unavailable over time, but the entry remains valid without it. |
| `image`    | `string \| null` | Optional image or thumbnail URL associated with the entry.                                          |
| `notes`    | `string`         | User-created notes or comments.                                                                     |
| `labels`   | `string[]`       | Array of label IDs assigned to the entry.                                                           |
| `created`  | `string`         | ISO 8601 timestamp indicating when the entry was created.                                           |
| `modified` | `string`         | ISO 8601 timestamp indicating the last modification.                                                |

### Example

```json
{
  "id": "entry_7d2f4b",
  "title": "Frieren: Beyond Journey's End",
  "url": "https://myanimelist.net/anime/52991",
  "image": "https://cdn.example.com/frieren.jpg",
  "notes": "Season 1 Ep 6",
  "labels": [
    "label_anime",
    "label_fantasy"
  ],
  "created": "2026-07-09T09:30:00Z",
  "modified": "2026-07-09T09:30:00Z"
}
```

---

## Label

Labels are reusable categories that can be assigned to entries. A label may represent a genre, status, topic, or a primary type such as *Movie*, *Anime*, or *Game*.

| Field       | Type             | Description                                               |
| ----------- | ---------------- | --------------------------------------------------------- |
| `id`        | `string`         | Unique identifier for the label.                          |
| `name`      | `string`         | Display name of the label.                                |
| `color`     | `string`         | Color associated with the label (e.g. hex value).         |
| `icon`      | `string \| null` | Optional icon identifier for display purposes.            |
| `isPrimary` | `boolean`        | Indicates whether the label is considered a primary type. |

### Example

```json
{
  "id": "label_anime",
  "name": "Anime",
  "color": "#3B82F6",
  "icon": "tv",
  "isPrimary": true
}
```

---

## Relationships

* An Entry can have zero or more Labels.
* Labels are shared between multiple Entries.
* Entries store label IDs rather than full label objects to avoid data duplication.

Entry
 ├── id
 ├── title
 ├── ...
 └── labels
      ├── label_anime
      ├── label_fantasy
      └── label_completed

Label
 ├── id = label_anime
 ├── name = Anime
 └── ...

---

## Design Principles

* Entries remain useful even if their original URL is no longer available.
* Labels are reusable and managed independently from Entries.
* Relationships are maintained using IDs rather than nested objects.
* All timestamps use the ISO 8601 format in UTC.
* The data model is designed to be easily exportable and importable as JSON.
