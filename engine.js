/* Regras puras: compartilhadas pelo jogo e pelos testes. */
(function(root){
'use strict';
const foods=[
{id:'maca',name:'Maçã',emoji:'🍎',healthy:true,tip:'A maçã é uma fruta in natura. Frutas inteiras trazem variedade à alimentação.'},
{id:'brocolis',name:'Brócolis',emoji:'🥦',healthy:true,tip:'Brócolis é uma hortaliça. Varie as verduras e os legumes nas refeições.'},
{id:'banana',name:'Banana',emoji:'🍌',healthy:true,tip:'A banana é uma fruta in natura e uma opção prática para compor um lanche.'},
{id:'cenoura',name:'Cenoura',emoji:'🥕',healthy:true,tip:'A cenoura é um legume. Pode fazer parte de saladas e preparações caseiras.'},
{id:'morango',name:'Morango',emoji:'🍓',healthy:true,tip:'Morangos são frutas in natura. Diferentes frutas ajudam a variar o cardápio.'},
{id:'alface',name:'Alface',emoji:'🥬',healthy:true,tip:'Alface é uma verdura. Lave e higienize corretamente os vegetais antes de comer.'},
{id:'refrigerante',name:'Refrigerante',emoji:'🥤',healthy:false,tip:'Refrigerantes são ultraprocessados. Para acompanhar as refeições, prefira água.'},
{id:'biscoito',name:'Biscoito recheado',emoji:'🍪',healthy:false,tip:'Biscoitos recheados são exemplos de ultraprocessados. Observe a lista de ingredientes.'},
{id:'bala',name:'Bala industrializada',emoji:'🍬',healthy:false,tip:'Balas industrializadas costumam combinar açúcar, aromas e corantes. Não substituem frutas.'},
{id:'macarrao',name:'Macarrão instantâneo',emoji:'🍜',healthy:false,tip:'Macarrão instantâneo é ultraprocessado. Ele é diferente do macarrão simples preparado em casa.'},
{id:'salgadinho',name:'Salgadinho de pacote',emoji:'🍿',healthy:false,tip:'Este cartão representa salgadinho industrializado, não pipoca caseira. A composição e o preparo importam.'},
{id:'sorvete',name:'Sorvete de pacote',emoji:'🍦',healthy:false,tip:'Este exemplo é o sorvete ultraprocessado com aromas, corantes e emulsificantes; receitas caseiras podem ser diferentes.'}
];
class Game{
 constructor(mode='challenge'){this.mode=mode;this.status='ready';this.score=0;this.answers=new Map();this.remaining=60000;this.deadline=0;}
 start(now){this.status='playing';this.score=0;this.answers.clear();this.remaining=60000;this.deadline=now+60000;}
 tick(now){if(this.status==='playing'&&this.mode==='challenge'){this.remaining=Math.max(0,this.deadline-now);if(!this.remaining)this.status='finished';}return this.remaining;}
 pause(now){this.tick(now);if(this.status==='playing')this.status='paused';}
 resume(now){if(this.status==='paused'){this.status='playing';this.deadline=now+this.remaining;}}
 choose(id,destination,now){this.tick(now);if(this.status!=='playing'||!['basket','outside'].includes(destination)||this.answers.has(id))return null;const food=foods.find(f=>f.id===id);if(!food)return null;const correct=food.healthy===(destination==='basket');const points=correct?(food.healthy?10:5):-5;const answer={food,destination,correct,points};this.score+=points;this.answers.set(id,answer);if(this.answers.size===foods.length)this.status='finished';return answer;}
}
function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const api={foods,Game,shuffle};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.NutriEngine=api;
})(typeof window==='undefined'?{}:window);
