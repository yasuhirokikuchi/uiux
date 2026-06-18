# Kanazawa Bookmark

石川県金沢市の魅力を紹介する観光情報ウェブサイトです。
「建築物」「食べ物」「歴史」の3つのカテゴリーに焦点を当て、金沢の伝統と現代が融合した姿を発信しています。


[Vercel で公開中](uiux-orpin-nu.vercel.app
)

<p align="center">
<img width="50%" height="50%" alt="ホームページ" src="https://github.com/user-attachments/assets/e01cade2-a7d0-4114-aea4-4d30a00cac1e"/>
</p>

## 概要

金沢の主要な観光スポットやグルメ情報を視覚的に分かりやすくまとめた静的ウェブサイトです。
各スポットの詳細情報に加え、Google Mapsとの連携によるアクセスの確認も可能です。

## 特徴

- **レスポンシブデザイン**: スマートフォンやPCなど、様々なデバイスで快適に閲覧可能です。
- **インタラクティブなマップ**: 各観光スポットや飲食店にはGoogle Mapsが埋め込まれており、場所をすぐに確認できます。
- **スムーズなユーザー体験**: スムーズスクロール機能や、スクロールに応じたヘッダーの縮小アニメーションを実装しています。
- **豊かなビジュアル**: 金沢の美しい風景や食文化を多くの写真で紹介しています。

## 構成

### ページ構成

- **トップページ (`index.html`)**: サイトの入り口。各カテゴリーへのナビゲーションやギャラリーを表示します。
- **建築物 (`building.html`)**: 金沢城や兼六園、石川県立図書館などの歴史的・現代的建築物を紹介します。
- **食べ物 (`food.html`)**: のどぐろや和菓子、スイーツなどの地元の食文化を紹介します。
- **歴史 (`history.html`)**: 各名所の歴史的背景を深く掘り下げて解説します。

### 技術スタック

- **HTML5**: セマンティックなマークアップ。
- **CSS3**: フレックスボックスやグリッドを用いたレイアウト、アニメーション。
- **JavaScript (Vanilla JS)**: スムーズスクロール、ヘッダーのスクロールエフェクト。

## デプロイ（Vercel）

このサイトは [Vercel](https://vercel.com/) でホスティングしています。ビルドステップは不要な静的サイトです。

### 初回セットアップ

1. [Vercel](https://vercel.com/) に GitHub アカウントでログインする
2. **Add New… → Project** から `yasuhirokikuchi/uiux` リポジトリをインポートする
3. 設定はそのままで **Deploy** をクリックする
   - **Framework Preset**: Other
   - **Build Command**: 空欄
   - **Output Directory**: 空欄（ルートをそのまま配信）
4. デプロイ完了後、`https://<プロジェクト名>.vercel.app` で公開される

### 以降の更新

`main` ブランチへ push するたびに Vercel が自動で再デプロイします。

### GitHub Pages からの移行

GitHub Pages を使っていた場合は、リポジトリの **Settings → Pages** で **Source** を **None** に設定し、二重公開を防いでください。

## ファイル構造

```text

├── index.html            # トップページ
├── pages/                # 各下層ページ (建築物、食べ物、歴史)
│   ├── building.html
│   ├── food.html
│   └── history.html
├── css/                  # スタイルシート
│   ├── style.css
│   ├── header.css
│   └── footer.css
├── js/                   # JavaScript
│   └── index.js
├── images/               # 画像資産
│   └── ... (全ての画像ファイル)
├── vercel.json           # Vercel デプロイ設定
└── README.md

```
