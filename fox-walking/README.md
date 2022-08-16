<h2 align="center">
  Sprite Walking Fox Animation 🦊
</h2>
<br/>
<div align="center">
  <img alt="Fox Walking Animation" src="assets/sprite-walking-fox-animation.png" />
</div>

<br/>

## ✨What are Image Sprites

Image Sprites are a collection of images combined into a single image file. We can display only parts of that single image file, based on what we need

<br/>

## ✨What's the advantage of using Image Sprites?

Image Sprites will reduce the number of server requests since it's loaded only once, instead of having several images being loaded in multiple server requests

<br/>

## ✨ How can we use Sprites

We set a the image as background-image and then with the background position property we can display a single portion of the sprite

<br/>

## ✨This animation use steps css animations

steps() is a timing function that allows us to break an animation or transition into segments, rather than one continuous transition from one state to another

This function takes two parameters:

```
steps(<number_of_steps>, <direction>)
```

<number_of_steps> specifies the positive number of steps we want our animation to take

<direction> defines the point at which the action declared in our @keyframes will occur (optional and will default to “end” if empty)

Since we have 4 images for each walking direction that our fox goes, we use steps(4)
