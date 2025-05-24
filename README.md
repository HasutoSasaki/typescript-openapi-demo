# TypeScript OpenAPI Demo

このプロジェクトは、TypeScriptとOpenAPIを使用してAPIを構築するデモです。以下にプロジェクトの概要とセットアップ手順を示します。

## 概要

このプロジェクトは、Expressを使用してAPIを構築し、OpenAPI仕様に基づいてドキュメントを生成します。プロジェクトには以下の主要なファイルが含まれています。

- **src/app.ts**: アプリケーションのエントリポイント。Expressアプリケーションのインスタンスを作成し、ミドルウェアとルートを設定します。
- **src/controllers/apiController.ts**: APIのコントローラーを定義し、APIリクエストを処理するメソッドを持つクラスをエクスポートします。
- **src/routes/apiRoutes.ts**: APIのルートを設定し、apiControllerからメソッドをインポートしてルートに関連付けます。
- **src/types/index.ts**: APIのリクエストやレスポンスの型を定義するインターフェースをエクスポートします。
- **openapi.yaml**: OpenAPI仕様を定義し、APIのエンドポイント、リクエスト、レスポンスの構造を記述します。
- **tsconfig.json**: TypeScriptの設定ファイル。コンパイラオプションやコンパイルに含めるファイルを指定します。
- **package.json**: npmの設定ファイル。プロジェクトの依存関係やスクリプトをリストします。

## セットアップ手順

1. リポジトリをクローンします。
   ```
   git clone <repository-url>
   ```

2. プロジェクトディレクトリに移動します。
   ```
   cd typescript-openapi-demo
   ```

3. 依存関係をインストールします。
   ```
   npm install
   ```

4. アプリケーションを起動します。
   ```
   npm start
   ```

5. OpenAPI仕様を確認するには、`openapi.yaml`ファイルを参照してください。

## 使用技術

- TypeScript
- Express
- OpenAPI

このプロジェクトを通じて、TypeScriptとOpenAPIを使用したAPI開発の基本を学ぶことができます。