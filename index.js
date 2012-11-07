


var Subj,Subject=Subj={
  def:function(definition){
    return (definition?
      (definition.__proto__=this,definition):
      ({__proto__:this}))},
  new:function(instance){
    return (typeof this.init==="function"?
      (this.init.apply({__proto__:this},arguments)):
      (instance?
       (instance.__proto__=this,instance):
       ({__proto__:this})))}}

Subj.clone=Subj.def

module.exports={
  Subj:Subj,
  Subject:Subj
}


