<div class="chat_box" id="chat">
  <div class="chatheader" onclick='showhidechat()'>Messenger Kompi Ajaib
  </div>
    <div class='close-chatfb' onclick='hidechatfb()'>&#215;</div>
    <div class='maxi-chatfb' id='maxi-chatfb' onclick='showhidechat()'>&amp;square;</div>
    <div class='mini-chatfb' id='mini-chatfb' onclick='showhidechat()'>&#95;</div>
  <div class="pesan_chat">
    <p>Hai! Kamu bisa kirim pesan ke Admin di sini, jangan lupa LIKE Kompi Ajaib ya... Terima kasih.</p>
    <script type='text/javascript'>
//<![CDATA[
document.write('<iframe name="f11b13dc65e614" width="250px" height="310px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" data-src="https://www.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fbz-D0tzmBsw.js%3Fversion%3D42%23cb%3Df100e25f3ae8bb8%26domain%3Dmoraltime.com.np%26origin%3Dhttps%253A%252F%252Fmoraltime.com.np%252Ff8f907cf72f9a4%26relation%3Dparent.parent&amp;container_width=0&amp;height=310&amp;hide_cover=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FSmile-Meme-1481385875222412%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=true&amp;small_header=true&amp;tabs=messages&amp;width=250" style="border: none; visibility: visible; width: 250px; height: 310px;" class=""></iframe>');
//]]>
</script>
  </div>
</div>

<script>
//<![CDATA[
function showhidechat() {
  var o = document.getElementById("chat");
  "0px" !== o.style.bottom ? o.style.bottom = "0px" : o.style.bottom = "-400px";
  var o = document.getElementById("maxi-chatfb");
  "none" !== o.style.display ? o.style.display = "none" : o.style.display = "block";
  var o = document.getElementById("mini-chatfb");
  "block" !== o.style.display ? o.style.display = "block" : o.style.display = "none";
};
function hidechatfb() {
  var e = document.getElementById("chat").style.display = "none";
};
function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;
//]]>
</script>