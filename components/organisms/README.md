【参考】https://blog.spacemarket.com/code/atomic-design%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6react%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%86%8D%E8%A8%AD%E8%A8%88%E3%81%97%E3%81%9F%E8%A9%B1/

例）Header, Calendar, Modal, CardList …

AtomsやMoleculesを組み合わせて作ります。

使っているMoleculesのmarginやwidthはここで指定します。

Atomsを直接使う場合には色やpadding、width、marginを指定します。

しかしOrganismsは汎用的に使うことができるよう、Organisms自体のwidthやmarginなどは（基本的には）ここでは指定しません。