

Ubersimple prototypal {Io-lang|Lua}-style inheritance in js
================

```javascript

var Subj=require("no/subject").Subj

//define something
var S0=Subj.def({
  name:"Something",
  whoami:function(){
    return this.name}})

//instantiate it
var s0=S0.new({
  name:"Something1"})

expect(s0.whoami(),"Something1")

//inherit
var S1=S0.def({
  name:"Other",
  whoami:function(){
    return S0.whoami.apply(this,arguments)+" One"}})

//instantiate inherited
var s1=S1.new({
  name:"Another"})


expect(s1.whoami(),"Another One")

var S2=S1.def({
  init:function(options){
    options.addname &&
      (this.name+=" "+addname)}})

var s2=S2.new({addname:"No"})

expect(s2.whoami(),"Other No One")
```

