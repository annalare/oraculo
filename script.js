const h2 = document.querySelector("h2");
console.log(h2);
const button = document.querySelector("a");
const pedidos = () => {
  const aleatorio = Math.round(Math.random() * 19);
  const mensagens = [
    "A vida trará coisas boas se tiver paciência.",
    "A maior de todas as torres começa no solo",
    "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração",
    "Não desista, você chegará lá e terá uma vitória incrível",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "Nada é por acaso.Acredite em seus sonhos e no seu potencial. Na vida tudo se supera...",
    "Se estiver cansado, aprenda a descansar, não a desistir",
    "As coisas mais gostosas da vida acontecem quando não se espera nada",
    "A única coisa impossível é aquela que você não tenta",
    "A expectativa do outro é um lugar muito desconfortável para você morar",
    "Correndo de si mesmo não se completa o percurso",
    " Seja sua própria inspiração",
    " Comece onde está. Use o que você tem. Faça o que você pode.",
    "O bom-senso vai mais longe do que muito conhecimento.",
    "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade. ",
    "Pare de procurar eternamente; a felicidade está bem ao seu lado.",
    " Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
    "O que controla sua mente controla sua vida",
    "A expectativa do outro é um lugar muito desconfortável para morar",
    "Você não encontra a paz evitando a vida",
  ];

  return mensagens[aleatorio];
};
button.onclick = () => {
  h2.innerText = pedidos();
};
