# POC

## Mimic current designer functionality

- change text
- change logo: png
- change logo: svg
- change colors
- change logo: svg + color change
- change options: aka stirrups

## Custom elements

- Vertical text
- Curved text (i.e. toe text)
- Curved text (i.e. straight letters version for knitted socks)
- Text that perfectly scales to fit box

# Customer View

## Flat view

## 3D template

Translate flat view to 3D template view. Automatically position & scale items from the flat view.

## 3D image render

Turn flat view into proof, which in turn can be 3D rendered.

# Proof

## Remote content

Make sure remote content is loaded and applied correctly:

- images
- svg
- fonts

## Build proof layout

What customers see may not match how we wish to produce the proof. Thus, copy elements from customer design to proof layout.

Idea1: Copy elements to proof layout (of both socks)
Idea1: Copy elements to proof layout per leg, export to image - then combine
This may be easier than needing mask for overflow beyond bleed area.

## Dynamic scaling for different sizes

How to scale designs for different foot sizes?
The width does not really increase, but length do. Some elements may need to stretch vertically while others need to be locked in place.

## Bleed area

Is bleed area?

- a solid color
- Overflow of design
- last pixel repeat (i.e. last pixel duplicated to fill bleed)

## Knitted socks

- Option1: Copy dynamic elements onto pixel-perfect version of proof template
- Option2: Generate entire pixel proof from design (or PSD file?)
