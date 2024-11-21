import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('PWA está pronto para ser usado offline.');
    },
    cached() {
      console.log('Conteúdo está em cache para uso offline.');
    },
    updated() {
      console.log('Novo conteúdo disponível; por favor, atualize.');
    },
    offline() {
      console.log('Sem conexão com a internet. Usando modo offline.');
    },
    error(error) {
      console.error('Erro durante o registro do Service Worker:', error);
    }
  });
}
