<style type="text/css">
.chat_box {
  background: #fff;
  width: 270px;
  height: 435px;
  position: fixed;
  bottom: -400px;
  right: 60px;
  transition: all .3s;
  border: none;
  border-radius: 5px 5px 0 0;
  -webkit-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  z-index:1000000;
}
.pesan_chat {
  text-align: center;
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 5px 5px 15px;
}
.chatheader {
  margin: 0 auto;
  padding: 0 10px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: left;
  display: block;
  cursor: pointer;
  background:#3a5897;
}
.pesan_chat p {
  color: #616161;
  font-size: 14px;
  margin: 10px;
}
.close-chatfb {
  position: absolute;
  top: 0;
  right: 0;
  font-family: Arial;
  font-size: 24px;
  font-weight: 700;
  cursor:pointer;
  width:24px;
  color: #fff;
  height:35px;
  line-height:35px;
  text-align:center;
  opacity: .7;
}
.maxi-chatfb,
.mini-chatfb {
  position: absolute;
  top: 0;
  right: 20px;
  font-family: Arial;
  font-weight: 700;
  cursor:pointer;
  width:18px;
  color: #fff;
  text-align:center;
  opacity: .7;
}
.maxi-chatfb {
  font-size: 24px;
  height:30px;
  line-height:30px;
}
.mini-chatfb {
  font-size: 20px;
  height:25px;
  line-height:25px;
  display: none;
}
.close-chatfb:hover,
.maxi-chatfb:hover,
.mini-chatfb:hover{
  opacity:1;
}
</style>