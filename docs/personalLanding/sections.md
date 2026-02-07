---
sidebar_position: 3
---

# Sections Reference

Complete guide to all section types and their configuration options. Each section can be customized through `config.json`.

## Hero Section

The hero section is typically the first thing visitors see. It features your name, tagline, and optional avatar.

### Variants

Hero comes with **6 variants**, each with a different layout and style:

| Variant    | Description                                  |
| ---------- | -------------------------------------------- |
| `centered` | Classic centered layout with avatar and text |
| `split`    | Side-by-side layout with avatar on one side  |
| `minimal`  | Text-only, ultra-minimal design              |
| `bold`     | Large, attention-grabbing typography         |
| `card`     | Content in a card with subtle shadow         |
| `links`    | Includes social links directly in the hero   |

### Configuration

```json
{
	"type": "hero",
	"enabled": true,
	"variant": "centered",
	"name": "Your Name",
	"tagline": "Your professional tagline",
	"avatar": "/img/avatar.png",
	"showAvatar": true,
	"links": [] // Only for "links" variant
}
```

| Field        | Type    | Required | Description                                         |
| ------------ | ------- | -------- | --------------------------------------------------- |
| `variant`    | string  | Yes      | One of: centered, split, minimal, bold, card, links |
| `name`       | string  | Yes      | Your name or headline                               |
| `tagline`    | string  | Yes      | Subtitle or professional tagline                    |
| `avatar`     | string  | No       | Path to avatar image (e.g., "/img/avatar.png")      |
| `showAvatar` | boolean | No       | Display avatar (default: true)                      |
| `links`      | array   | No       | Social links (required for "links" variant)         |

#### Links Format (for "links" variant)

```json
{
	"links": [
		{
			"name": "GitHub",
			"url": "https://github.com/username",
			"icon": "github"
		},
		{
			"name": "LinkedIn",
			"url": "https://linkedin.com/in/username",
			"icon": "linkedin"
		}
	]
}
```

### Example

```json
{
	"type": "hero",
	"enabled": true,
	"variant": "centered",
	"name": "Alex Smith",
	"tagline": "Full-stack Developer & Designer",
	"avatar": "/img/avatar.png",
	"showAvatar": true
}
```

---

## About Section

Share your bio, background, and skills.

### Variants

| Variant    | Description                               |
| ---------- | ----------------------------------------- |
| `centered` | Centered text with skill badges           |
| `split`    | Two-column layout with content and skills |
| `card`     | Content in a card container               |
| `minimal`  | Simple, text-focused design               |

### Configuration

```json
{
	"type": "about",
	"enabled": true,
	"variant": "centered",
	"title": "About Me",
	"content": "Your bio text here...",
	"skills": ["Skill 1", "Skill 2", "Skill 3"]
}
```

| Field     | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| `variant` | string | Yes      | One of: centered, split, card, minimal    |
| `title`   | string | Yes      | Section heading                           |
| `content` | string | Yes      | Your biography or description             |
| `skills`  | array  | No       | Array of skill names to display as badges |

### Example

```json
{
	"type": "about",
	"enabled": true,
	"variant": "split",
	"title": "About Me",
	"content": "I'm a passionate developer who loves creating elegant solutions to complex problems. With expertise in modern web technologies, I help bring ideas to life through clean code and thoughtful design.",
	"skills": [
		"JavaScript",
		"TypeScript",
		"Svelte",
		"React",
		"Node.js",
		"PostgreSQL"
	]
}
```

---

## Links Section

Display social media links and other important URLs.

### Variants

| Variant   | Description                   |
| --------- | ----------------------------- |
| `default` | Vertical list of link buttons |
| `grid`    | Grid layout for links         |
| `card`    | Links as cards with icons     |
| `minimal` | Simple text links             |

### Configuration

```json
{
	"type": "links",
	"enabled": true,
	"variant": "default",
	"title": "Connect With Me",
	"items": [
		{ "name": "GitHub", "url": "https://github.com/username", "icon": "github" }
	]
}
```

| Field     | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| `variant` | string | Yes      | One of: default, grid, card, minimal |
| `title`   | string | Yes      | Section heading                      |
| `items`   | array  | Yes      | Array of link objects                |

#### Item Format

```json
{
	"name": "GitHub",
	"url": "https://github.com/username",
	"icon": "github"
}
```

| Field  | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| `name` | string | Yes      | Display name for the link     |
| `url`  | string | Yes      | Full URL (including https://) |
| `icon` | string | Yes      | Icon identifier               |

#### Supported Icons

- `github` — GitHub
- `linkedin` — LinkedIn
- `twitter` — Twitter/X
- `discord` — Discord
- `email` — Email
- `blog` — Blog/Website
- Custom icons can be added by editing the component

### Example

```json
{
	"type": "links",
	"enabled": true,
	"variant": "card",
	"title": "Find Me Online",
	"items": [
		{
			"name": "GitHub",
			"url": "https://github.com/alexsmith",
			"icon": "github"
		},
		{
			"name": "LinkedIn",
			"url": "https://linkedin.com/in/alexsmith",
			"icon": "linkedin"
		},
		{ "name": "Email", "url": "mailto:alex@example.com", "icon": "email" }
	]
}
```

---

## Contact Section

Add a contact button and/or form.

### Configuration

```json
{
	"type": "contact",
	"enabled": true,
	"title": "Get In Touch",
	"description": "Have a project in mind? Let's talk!",
	"button": {
		"enabled": true,
		"type": "email",
		"value": "alex@example.com",
		"text": "Send Email"
	},
	"form": {
		"enabled": false
	}
}
```

| Field         | Type   | Required | Description                  |
| ------------- | ------ | -------- | ---------------------------- |
| `title`       | string | Yes      | Section heading              |
| `description` | string | No       | Introductory text            |
| `button`      | object | No       | Contact button configuration |
| `form`        | object | No       | Contact form configuration   |

#### Button Configuration

```json
{
	"enabled": true,
	"type": "email",
	"value": "alex@example.com",
	"text": "Send Email"
}
```

| Field     | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| `enabled` | boolean | Show the button                |
| `type`    | string  | Button type: "email" or "link" |
| `value`   | string  | Email address or URL           |
| `text`    | string  | Button text                    |

#### Form Configuration

```json
{
	"enabled": true,
	"email": "alex@example.com",
	"subject": "Contact Form Submission",
	"successMessage": "Thanks! I'll get back to you soon.",
	"namePlaceholder": "Your Name",
	"emailPlaceholder": "your@email.com",
	"messagePlaceholder": "Your message...",
	"submitText": "Send Message"
}
```

Note: The form uses `mailto:` links. For a true backend form, you'll need to integrate a service like Formspree, Netlify Forms, or similar.

---

## Services Section

Showcase services or offerings you provide.

### Configuration

```json
{
	"type": "services",
	"enabled": true,
	"title": "What I Do",
	"items": [
		{
			"name": "Web Development",
			"description": "Building modern web applications...",
			"icon": "code"
		}
	]
}
```

| Field   | Type   | Required | Description              |
| ------- | ------ | -------- | ------------------------ |
| `title` | string | Yes      | Section heading          |
| `items` | array  | Yes      | Array of service objects |

#### Item Format

```json
{
	"name": "Service Name",
	"description": "Description of the service",
	"icon": "code"
}
```

| Field         | Type   | Required | Description                                           |
| ------------- | ------ | -------- | ----------------------------------------------------- |
| `name`        | string | Yes      | Service name                                          |
| `description` | string | Yes      | Service description                                   |
| `icon`        | string | Yes      | Icon identifier (code, design, api, consulting, etc.) |

### Example

```json
{
	"type": "services",
	"enabled": true,
	"title": "What I Do",
	"items": [
		{
			"name": "Web Development",
			"description": "Building responsive, performant web applications with modern frameworks",
			"icon": "code"
		},
		{
			"name": "UI/UX Design",
			"description": "Creating intuitive and beautiful user interfaces",
			"icon": "design"
		}
	]
}
```

---

## Projects Section

Display portfolio projects with descriptions and tags.

### Configuration

```json
{
	"type": "projects",
	"enabled": true,
	"title": "Featured Projects",
	"items": [
		{
			"name": "Project Name",
			"description": "Brief project description",
			"url": "https://github.com/username/project",
			"tags": ["Svelte", "TypeScript", "PostgreSQL"]
		}
	]
}
```

| Field   | Type   | Required | Description              |
| ------- | ------ | -------- | ------------------------ |
| `title` | string | Yes      | Section heading          |
| `items` | array  | Yes      | Array of project objects |

#### Item Format

```json
{
	"name": "Project Name",
	"description": "Brief description",
	"url": "https://github.com/username/project",
	"tags": ["Tag1", "Tag2"]
}
```

| Field         | Type   | Required | Description                               |
| ------------- | ------ | -------- | ----------------------------------------- |
| `name`        | string | Yes      | Project name                              |
| `description` | string | Yes      | Brief description                         |
| `url`         | string | No       | Link to project (GitHub, live demo, etc.) |
| `tags`        | array  | Yes      | Technology/category tags                  |

---

## Timeline Section

Show your work experience, education, or career milestones.

### Configuration

```json
{
	"type": "timeline",
	"enabled": true,
	"title": "Experience",
	"items": [
		{
			"date": "2023 - Present",
			"title": "Senior Software Engineer",
			"subtitle": "Company Name",
			"description": "Brief description of role and achievements"
		}
	]
}
```

| Field   | Type   | Required | Description             |
| ------- | ------ | -------- | ----------------------- |
| `title` | string | Yes      | Section heading         |
| `items` | array  | Yes      | Array of timeline items |

#### Item Format

```json
{
	"date": "2023 - Present",
	"title": "Job Title",
	"subtitle": "Company Name",
	"description": "Role description"
}
```

| Field         | Type   | Required | Description                  |
| ------------- | ------ | -------- | ---------------------------- |
| `date`        | string | Yes      | Date range or time period    |
| `title`       | string | Yes      | Position or event title      |
| `subtitle`    | string | No       | Company, school, or location |
| `description` | string | Yes      | Details about the role/event |

---

## Gallery Section

Display images in various layouts.

### Variants

| Variant    | Description                       |
| ---------- | --------------------------------- |
| `grid`     | Uniform grid layout               |
| `masonry`  | Pinterest-style masonry grid      |
| `lightbox` | Grid with lightbox modal on click |
| `carousel` | Sliding carousel                  |

### Configuration

```json
{
	"type": "gallery",
	"enabled": true,
	"variant": "grid",
	"title": "Gallery",
	"items": [
		{
			"image": "/img/photo1.jpg",
			"caption": "Image caption",
			"url": ""
		}
	]
}
```

| Field     | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| `variant` | string | Yes      | One of: grid, masonry, lightbox, carousel |
| `title`   | string | Yes      | Section heading                           |
| `items`   | array  | Yes      | Array of image objects                    |

#### Item Format

```json
{
	"image": "/img/photo.jpg",
	"caption": "Photo caption",
	"url": "https://example.com"
}
```

| Field     | Type   | Required | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| `image`   | string | Yes      | Path to image file                    |
| `caption` | string | No       | Image caption/description             |
| `url`     | string | No       | Link when image is clicked (optional) |

---

## Testimonials Section

Display client testimonials or reviews.

### Configuration

```json
{
	"type": "testimonials",
	"enabled": true,
	"title": "What People Say",
	"items": [
		{
			"quote": "Great developer to work with!",
			"name": "John Doe",
			"role": "CEO, Example Inc.",
			"avatar": ""
		}
	]
}
```

| Field   | Type   | Required | Description                  |
| ------- | ------ | -------- | ---------------------------- |
| `title` | string | Yes      | Section heading              |
| `items` | array  | Yes      | Array of testimonial objects |

#### Item Format

```json
{
	"quote": "The testimonial text goes here",
	"name": "Client Name",
	"role": "Title, Company",
	"avatar": "/img/client-avatar.jpg"
}
```

| Field    | Type   | Required | Description              |
| -------- | ------ | -------- | ------------------------ |
| `quote`  | string | Yes      | Testimonial text         |
| `name`   | string | Yes      | Client name              |
| `role`   | string | Yes      | Client title and company |
| `avatar` | string | No       | Path to client photo     |

---

## FAQ Section

Frequently asked questions with expandable answers.

### Configuration

```json
{
	"type": "faq",
	"enabled": true,
	"title": "Frequently Asked Questions",
	"items": [
		{
			"question": "Your question here?",
			"answer": "Your answer here."
		}
	]
}
```

| Field   | Type   | Required | Description          |
| ------- | ------ | -------- | -------------------- |
| `title` | string | Yes      | Section heading      |
| `items` | array  | Yes      | Array of Q&A objects |

#### Item Format

```json
{
	"question": "What is your question?",
	"answer": "This is the answer to the question."
}
```

---

## Stats Section

Display key numbers or achievements.

### Configuration

```json
{
	"type": "stats",
	"enabled": true,
	"title": "By the Numbers",
	"items": [
		{
			"label": "Projects",
			"value": "50+",
			"description": "Completed"
		}
	]
}
```

| Field   | Type   | Required | Description           |
| ------- | ------ | -------- | --------------------- |
| `title` | string | Yes      | Section heading       |
| `items` | array  | Yes      | Array of stat objects |

#### Item Format

```json
{
	"label": "Projects",
	"value": "50+",
	"description": "Completed"
}
```

| Field         | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| `label`       | string | Yes      | Stat category                          |
| `value`       | string | Yes      | Numeric value (can include +, ∞, etc.) |
| `description` | string | Yes      | Additional context                     |

---

## Tips for Using Sections

### Section Order

Sections render in the order they appear in your config. A common pattern:

1. Hero (first impression)
2. About (introduce yourself)
3. Services or Projects (showcase work)
4. Timeline (experience)
5. Testimonials (social proof)
6. Links (social media)
7. Contact (call to action)

### Using Multiple Instances

You can use the same section type multiple times:

```json
{
	"sections": [
		{ "type": "gallery", "variant": "grid", "title": "Photos" },
		{ "type": "gallery", "variant": "carousel", "title": "Featured" }
	]
}
```

### Disable vs. Remove

- Set `"enabled": false` to temporarily hide a section while keeping the configuration
- Delete the section object entirely if you're sure you won't need it
