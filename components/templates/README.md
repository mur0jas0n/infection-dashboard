【参考】https://blog.spacemarket.com/code/atomic-design%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6react%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%86%8D%E8%A8%AD%E8%A8%88%E3%81%97%E3%81%9F%E8%A9%B1/

例）MainContents, MainContentsWithSideBar …

こちらは中身のないレイアウトのテンプレートです。

コンテンツの横幅（width）や、サイドバーがあった場合のコンテンツの横幅などが含まれます。

少し説明しずらいのですが、MainContentsというコンポーネントをつくるとします。

こちらはコンテンツ幅が810pxで中央寄せになるコンポーネントです。

このなかにOrganismsを組み合わせていくと、横幅が810pxのコンテンツが出来上がります。

また、サイドバー250pxとコンテンツ幅600pxのMainContentsWithSideBarをつくるとします。

このなかにOrganismsを組み合わせていくと、横幅が250pxのサイドバーと横幅が600pxのコンテンツが出来上がります。

つまり、コンポーネント自体の横幅を指定しなかったことがここで活きてくるのです。