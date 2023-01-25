# react_app

## Vite (React)

```
https://ja.vitejs.dev/guide/#%E6%9C%80%E5%88%9D%E3%81%AE-vite-%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B
```

1. install

```
npm create vite@latest

√ Project name: ... 【プロジェクト名】
√ Select a framework: » React
√ Select a variant: » TypeScript
```

```
  cd 【プロジェクト名】
  npm install
  npm run dev
```

## Prisma

```
https://www.prisma.io/docs/getting-started/quickstart
```

1. install

```
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

2. db migrate

```
npx prisma migrate dev --name init
```

### GUI DB Viewer

```
npx prisma studio
```
