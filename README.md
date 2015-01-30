maptimeatx.github.io
====================

Based on [Maptime Starter Site](https://github.com/maptime/starter/)

`jekyll serve --watch`


### Config

| Name | Required | Value | Description |
| --- | --- | --- | --- |
| baseurl | Yes | post | This value should always be the same. |
| permalink | No | how urls are generated | You can learn more about how they are generated [here](http://jekyllrb.com/docs/permalinks/). |
| markdown | No | Determines which markdown engine is used | Generally, you don't need to touch this field for your own needs. |
| paginate | Yes | Number of posts on the front page | Starter supports pagintaion. Control the number of posts on a given page by changing this value |
| repo | Yes | Name of the repo on GitHub | As an example, the name of the starter repo is `starter` |
| maptime: chapter | Yes | Name of your MapTime meetup | |
| maptime: twitter | No | Your MapTime Twitter username | |
| maptime: disqus | No | Disqus account name | Starter optionally supports comments on posts with [Disqus](disqus.com). Create a new Disqus account for a site and fill this field with the account name. |

### Content types

There are two kinds of content in Starter: post and event. You author these types of content in the `_posts` directory. Each content type has unique configuration options that you should declare at the top of the document. This is called [Frontmatter](http://jekyllrb.com/docs/frontmatter/).

#### Event

Events are for actual planned meetups with RSVP information. Note that the filename of the post should match the date of the meetup date.

##### Fronmatter options

| Name | Required | Value | Description |
| --- | --- | --- | --- |
| layout | Yes | event | This value should always be the same. |
| category | Yes | event | This value should always be the same. |
| title | Yes | The title of your event | |
| rsvp | Yes | URL to rsvp | This should be a link to  an [Eventbrite](eventbrite.com) date or other service. |

#### Posts

Posts are like blog posts. These are great for meetup follow ups or posts that don't have a meetup event tied to it.

##### Fronmatter options

| Name | Required | Value | Description |
| --- | --- | --- | --- |
| layout | Yes | post | This value should always be the same. |
| title | Yes | The title of your post | |
| author | No | Author's name | |
| image | No | URL path to an image | Images added here will show up as a [Twitter card](https://dev.twitter.com/docs/cards) when a post is shared. |

## Help resources

- [Create an issue](https://github.com/maptime/starter/issues) on the Starter repo and we'll respond to it.
- Starter makes the assumption you will be running the site on GitHub pages. You can learn more about [GitHub Pages here](https://guides.github.com/features/pages/). 

## Licence

BSD
