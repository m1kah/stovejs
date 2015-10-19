# Induction stove

When stove is powered up
Then cooker power levels shows
|Cooker|value|
|Top left|(empty)|
|Top right|(empty)|
|Bottom right|(empty)|
|Bottom left|(empty)|

Given stove is powered up
When user presses on top left +
Then top left cooker shows 9


Given stove is powered up
When user presses on top right -
Then top right cooker shows 4

Given stove is powered up
When user presses the following sequence
* user presses on top right -
* user presses on bottom left +
* user presses on top right - 7 times
* user presses on bottom left +
* user presses on bottom right - 2 times
Then cooker power levels shows
|Top left|(empty)|
|Top right|0|
|Bottom right|3.|
|Bottom left|0|
