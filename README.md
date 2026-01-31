# 🚀 Space App

Uma aplicação web moderna e interativa para explorar uma galeria completa de fotos do espaço. Desenvolvida com React e Vite, oferece uma experiência visual imersiva com design responsivo e funcionalidades avançadas de busca e filtragem.

## ✨ Funcionalidades

- **📸 Galeria de Fotos**: Explore uma coleção completa de imagens do espaço
- **🔍 Busca Inteligente**: Pesquise fotos por título ou fonte
- **🏷️ Filtro por Tags**: Filtre as imagens por categorias específicas
- **⭐ Sistema de Favoritos**: Marque suas fotos favoritas para acesso rápido
- **🔍 Modal de Zoom**: Visualize imagens em tamanho ampliado com modal interativo
- **📱 Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **🎨 UI Moderna**: Interface elegante com gradientes e animações suaves

## 🛠️ Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.2.4** - Build tool rápida e moderna
- **Styled Components 6.3.8** - Estilização CSS-in-JS
- **ESLint** - Linter para qualidade de código

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/space-app.git
```

2. Entre no diretório do projeto:
```bash
cd space-app
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação no navegador:
```
http://localhost:5173
```

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para visualizar o build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
space-app/
├── public/
│   ├── icones/          # Ícones da aplicação
│   └── imagens/         # Imagens da galeria
├── src/
│   ├── componentes/     # Componentes React
│   │   ├── Banner/      # Banner principal
│   │   ├── BarraLateral/# Navegação lateral
│   │   ├── Cabecalho/   # Cabeçalho com busca
│   │   ├── Galeria/     # Componentes da galeria
│   │   │   ├── Imagem/  # Card de imagem
│   │   ├── ModalZoom/   # Modal de visualização
│   │   └── ...
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── fotos.json        # Dados das fotos
├── package.json
└── vite.config.js
```

## 🎯 Funcionalidades Principais

### Busca e Filtragem
- Busca em tempo real por título ou fonte das imagens
- Filtro por tags para categorizar as fotos
- Combinação de busca e filtros para resultados precisos

### Interatividade
- Sistema de favoritos com persistência visual
- Modal de zoom para visualização detalhada
- Navegação intuitiva com barra lateral

### Responsividade
- Layout adaptável para diferentes tamanhos de tela
- Otimização para dispositivos móveis
- Experiência consistente em todos os dispositivos

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para explorar as maravilhas do espaço.

---

**Space App** - A galeria mais completa de fotos do espaço 🌌
