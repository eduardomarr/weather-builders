# 🌤 WeatherBuilders
Aplicação de previsão do tempo, criada para o desafio de processo seletivo da empresa Builders.

## 🛠️ Desenvolvido com

Mencione as ferramentas que você usou para criar seu projeto

* [React Native](https://reactnative.dev/) - O framework mobile usado
* [Typescript](https://www.typescriptlang.org/) - Linguagem utilizada
* [Weather API](https://openweathermap.org/api) - API de previsão do tempo
* [react-native-geolocation](https://github.com/michalchudziak/react-native-geolocation) - Biblioteca de geolocalização
* [axios](https://axios-http.com/ptbr/docs/intro) - Biblioteca para fetch de dados de API
* [styled-components](https://styled-components.com/) - Biblioteca de estilização
* [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) - Biblioteca testes automatizados

## 🔧 Instalação
Faça o clone do projeto e depois execute o seguinte comando no terminal, para instalar as dependências:

```bash
yarn
```

Caso esteja no **macOS**, após instalar todas as dependências, execute o seguinte comando no terminal para instalar os pods:

```bash
cd ios && pod install && cd ..
```

### Env
Utilize o arquivo 'env.example' de auxílio para adicionar as variáves de dependência de forma correta. Para a aplicação funcionar é necessário adicionar uma 'API_KEY', que é encontrada quando se cadastra no site da API ([Weather API](https://openweathermap.org/api)). Caso não tenha uma conta criada, pode usar uma das seguintes chaves:


```bash
API_KEY=02347a202eb2b1d5bbf341443044cdbf

OU

API_KEY=96510948e9f1dcae835ba6f6dada1e6b
```
<i><b>OBS: Lembre-se de mudar o nome do arquivo para '.env'</b></i>

</br>

Agora você está pronto para rodar o projeto:

</br>

> Esse projeto foi desenvolvido com React Native CLI então abra um terminal e execute:

```bash
npx react-native start
```
depois abra outro terminal e execute:

```bash
npx react-native run-ios OU yarn ios
npx react-native run-android OU yarn android
```

## 💻 Testes
Para executar os testes automatizados, abra o terminal e execute:

```bash
yarn test
```

## 📱 UI Prints

<p align="center">
  <img  src="https://user-images.githubusercontent.com/24718475/211412757-3cd4efb8-1b83-46a8-9282-73ed961cb381.png">
</p>

<p align="center">
  <img  src="https://user-images.githubusercontent.com/24718475/211412858-e7426600-8b0d-4782-9f5d-91e5f943a88a.png">
</p>

<p align="center">
  <img  src="https://user-images.githubusercontent.com/24718475/211412901-93daee1b-6e0f-4f41-8f25-1bb2477f93e1.png">
</p>