Parte backend do desafio técnico para a vaga de Full-Stack Engineer para a empresa Arcano Technologies Projects.

Foi utilizado NestJS para criar a API solicitada.

Como por a API para rodar:
- Docker: Execute o comando: "docker run --name arcano_challenge -p 3030:3030 lcsgomes/arcano_challenge:v1".
- GitHub: Clone o repositório para sua máquina e execute o comando: "npm install", depois rode o comando "npm run build", e após isso execute "npm run start:prod".

Como utilizar a API:
- Acesse "http://localhost:3030/user/cart-history/ID", e substitua o ID pelo id de um usuário existente.
- Ou utilize o frontend: https://github.com/LcsGomes94/arcano_challenge_frontend.

Detalhes extras:
- Rate limiting pra proteger o servidor de sobrecarga.
- Cache de 5 segundos para melhor experiência do usuário.
- Pipeline para evitar IDs que não sejam números.
- Além de proteção contra possíveis outros erros.

API utilizada: https://fakestoreapi.com/docs.
