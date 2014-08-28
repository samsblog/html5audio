ADVaudio | a html5audio-player
==========
**version 2.0**<br />
<br />
AdvancedAudio is lightweight jQuery-Plugin to support theming of HTML5-Audio-tags. Your benefits are small file-size [2kb], simple integration into your site and customisable options.<br />
ADVaudio comes with 3 basic-themes. Default, Mogli and Starcraft2! Ready-to-use for your own themes. If you want to publish your own theme feel free to contact me.
> ADVaudio is free for non-commercial use, for further purpose see the license below.

<br />
Plug-In by [Sam Vieten](www.samvieten.de).
<br />
How it works<br />
==========
Nothing special abaout here. Simply add the css-file into the head of your site, script tags are added best at the bottom of your site.<br />
head:<br />
```html
<link href='PATH/advaudio.css' rel='stylesheet' type='text/css' />
```

<br />
Script:<br />

```javascript
<script type="text/javascript" src="PATH/jquery.x.y.js"></script>

<script type="text/javascript" src="PATH/advaudio.min.js"></script>
```

<br />
Now all you have to do is to call the script on your audio-element. To do so choose a class and call per jQuery syntax:<br />
<br />

```javascript
<script>
$('.yourClass').advAudio({
    color:'#c05'
});
</script>
```

<br />

Options<br />
==========
<table>
<tr>
    <td><strong>Option</strong></td>
    <td><strong>default</strong></td>
    <td><strong>action</strong></td>
</tr>

<tr>
    <td>pauseEnabled:</td>
    <td>true</td>
    <td>Show play / pause</td>
</tr>
<tr>
    <td>progressBarEnabled:</td>
    <td>true</td>
    <td>Show timeline</td>
</tr>
<tr>
    <td>volumeEnabled:</td>
    <td>true</td>
    <td>Show volume button</td>
</tr>
<tr>
    <td>color:</td>
    <td>true</td>
    <td>Audio-player color</td>
</tr>

</table>

<br />
Themes<br />
==========
- [x] Moglitheme [included in download]
- [x] Starcraft 2 Theme  [included in download]
<br />
implementing themes is easy. Just add the css file after the advaudio.css into your head. Done.<br />
```html
<link href='PATH/advtheme.css' rel='stylesheet' type='text/css' />
```



What's next to come<br />
==========
- [ ] Loop options
- [ ] Playlist options
- [ ] Responsive options
- [ ] 2 new Themes


License<br />
==========
Licensed under CreativeCommons v3;<br />
Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)<br />
<br />
http://creativecommons.org/licenses/by-nc/3.0/