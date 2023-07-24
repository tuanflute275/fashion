database fashion

CREATE TABLE account
(
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(100) NOT NULL,
    status varchar(50) NOT NULL,
    role varchar(50)NOT NULL DEFAULT 1,
    creaed_at date DEFAULT NOW(),
    Last_login datetime DEFAULT NOW()
);

INSERT INTO `account`(`name`, `email`, `password`, `status`, `role`) VALUES ('admin','admin@gmail.com','123456','true','admin');
INSERT INTO `account`(`name`, `email`, `password`, `status`, `role`) VALUES ('user1','user1@gmail.com','1234321','true','user');

CREATE TABLE category
(
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL UNIQUE,
    status tinyint
);

CREATE TABLE product
(
	id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(120) NOT NULL,
    price Float NOT NULL, 
    sale_price Float NULL DEFAULT 0,
    image varchar (200) NOT NULL,
    category_id int NOT NULL,
    status tinyint NULL DEFAULT 1,
    description text NOT NULL,
    created_at date DEFAULT NOW(),
    FOREIGN KEY (category_id) REFERENCES category(id)
); 

CREATE TABLE favorite
(
	id int PRIMARY KEY AUTO_INCREMENT,
    account_id int,
    product_id int,
    created_at date DEFAULT NOW(),
    FOREIGN KEY (account_id) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
CREATE TABLE cart
(
	id int PRIMARY KEY AUTO_INCREMENT,
    account_id int,
    product_id int,
    created_at date DEFAULT NOW(),
    FOREIGN KEY (account_id) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
INSERT INTO `favourite`(`account_id`, `product_id`) VALUES (1,2)

CREATE TABLE blog
(
	id int PRIMARY KEY AUTO_INCREMENT,
    image text,
    title varchar (200)
);


-- insert data

-- category
INSERT INTO `category`(`name`, `status`) VALUES ('áo khoác','1');
INSERT INTO `category`(`name`, `status`) VALUES ('áo thun','1');
INSERT INTO `category`(`name`, `status`) VALUES ('áo hoodie','1');
INSERT INTO `category`(`name`, `status`) VALUES ('áo sweater','1');
INSERT INTO `category`(`name`, `status`) VALUES ('áo sơ mi','1');
INSERT INTO `category`(`name`, `status`) VALUES ('quần','1');
INSERT INTO `category`(`name`, `status`) VALUES ('giày/dép','1');

-- product

-- giày dép
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NEW BALANCE','1.095.000','1.095.000','https://dosi-in.com/file/detailed/521/dosiin-new-balance-mennew-balance-sandal-slidessandals-flip-flops-521070521070.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('REEBOK','1.095.000' '2.390.000','1.095.000','https://dosi-in.com/file/detailed/521/dosiin-new-balance-mennew-balance-sandal-slidessandals-flip-flops-521070521070.jpg?w=320&h=320&fit=fill&fm=webp','7','1','Giày Tập Luyện Nam REEBOK Flashfilm Train 2.0 FY3946

100% chính hãng REEBOK Việt Nam

Bao gồm: Sản phẩm mới nguyên TAG, hóa đơn bán hàng từ SALEHUB

Đổi sản phẩm miễn phí trong vòng 30 ngày (xem chi tiết quy định đổi sản phẩm ');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','2.409.000','0','https://dosi-in.com/file/detailed/533/dosiin-nike-giay-tennis-nam-nike-court-vapor-lite-dc-533423533423.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('VANS','1.305.000','1.450.000','https://dosi-in.com/file/detailed/330/dosiin-vans-giay-sneakers-vans-authentic-white-canvas-low-vn-ee-w-330133330133.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','3.239.000','0','https://dosi-in.com/file/detailed/526/dosiin-nike-giay-the-thao-nam-nike-nike-crater-impact-se-dj-526444526444.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CONVERSE','1.400.000','0','https://dosi-in.com/file/detailed/328/dosiin-converse-giay-sneakers-converse-chuck-taylor-all-star-glam-dunk-c-328801328801.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','1.440.000','1.800.000','https://dosi-in.com/file/detailed/420/dosiin-adidas-giay-the-thao-nam-adidas-duramogw-420818420818.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NEW BALANCE','2.595.000','0','https://dosi-in.com/file/detailed/521/dosiin-new-balance-unisex-new-balance-ctcourt-sneakers-521366521366.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DINCOX SHOES','406.600','535.000','https://dosi-in.com/file/detailed/416/dosiin-dincox-shoes-coxgiay-sneakers-dincox-nu-nam-d-chocolate-chinh-hang-416270416270.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NEW BALANCE','1.187.000','0','https://dosi-in.com/file/detailed/479/dosiin-new-balance-kidsnew-balance-classic-sneakers-479171479171.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('RIENEVAN','520.000','650.000','https://dosi-in.com/file/detailed/202/dosiin-rienevan-rn-casualwhite-gum-rienevan-make-yourselfthuong-hieu-giay-viet-202153202153.jpeg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SKECHES','597.000','1.990.000','https://dosi-in.com/file/detailed/157/dosiin-skechers-giay-nam-skechers-moreno-welmer-blk-157946157946.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','443.400','739.000','https://dosi-in.com/file/detailed/381/dosiin-nike-giay-nam-nike-men-s-nike-solay-thong-381825381825.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','2.590.000','0','https://dosi-in.com/file/detailed/513/dosiin-mlb-mlb-giay-sneaker-bigball-chunky-mesh-513315513315.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','3.800.000','0','https://dosi-in.com/file/detailed/515/dosiin-adidas-giay-tennis-nam-adidas-adizero-ubersonic-m-parley-gx-515458515458.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('VIETGANGZ ORIGINAL','350.000','0','https://dosi-in.com/file/detailed/472/dosiin-vietgangz-original-dep-danchoi-logo-trang-472623472623.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SKECHES','1.890.000','0','https://dosi-in.com/file/detailed/158/dosiin-skechers-giay-nam-skechers-go-walk-prized-blk-158085158085.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CONVERSE','1.440.000','1.600.000','https://dosi-in.com/file/detailed/328/dosiin-converse-giay-sneakers-converse-chuck-taylor-all-star-vltg-back-to-earth-v-328662328662.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','750.000','0','https://dosi-in.com/file/detailed/420/dosiin-adidas-dep-the-thao-unisex-adidas-adilette-shower-gz-420849420849.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','1.600.000','3.200.000','https://dosi-in.com/file/detailed/150/dosiin-adidas-giay-chay-unisex-adidas-alphalava-fy-150937150937.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','1.039.000','2.590.000 ','https://dosi-in.com/file/detailed/196/dosiin-mlb-giay-sneakers-thoi-trang-big-ball-chunky-mickey-196628196628.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('VANS','1.550.000','000 ','https://dosi-in.com/file/detailed/508/dosiin-vans-giay-sneakers-vans-ua-classic-slip-on-mule-checkerboard-vnkteo-508481508481.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','3.086.300','4.409.000','https://dosi-in.com/file/detailed/216/dosiin-nike-giay-nam-nike-nike-air-max-react-ct-216944216944.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CONVERSE','1.440.000','1.600.000','https://dosi-in.com/file/detailed/328/dosiin-converse-giay-sneakers-converse-chuck-taylor-all-star-vltg-back-to-earth-v-328662328662.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('REEBOK','413.000','590.000','https://dosi-in.com/file/detailed/157/dosiin-reebok-dep-nam-reebok-rbk-fulgere-slide-fz-157023157023.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CONVERSE','1.350.000','1.350.000','https://dosi-in.com/file/detailed/328/dosiin-converse-giay-sneakers-converse-chuck-taylor-all-star-archival-print-camo-c-328844328844.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','1.750.000','3.500.000','https://dosi-in.com/file/detailed/381/dosiin-adidas-giay-chay-nam-adidas-xlm-s-381023381023.jpg?w=320&h=320&fit=fill&fm=webp','7','1','');

-- quần
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('TOBI','500.000','0','https://dosi-in.com/file/detailed/357/dosiin-tobi-quan-tobi-camo-mau-den-tui-hop-unisex-357380357380.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('5THEWAY','438.000','0','https://dosi-in.com/file/detailed/333/dosiin-theway-floral-youthkaki-pantblack-333538333538.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('URBAN MONKEY','600.000','0','https://dosi-in.com/file/detailed/367/dosiin-urban-monkey-quan-short-urban-monkey-triump-of-the-name-of-jesus-367991367991.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ROUTINE','511.000','0','https://dosi-in.com/file/detailed/527/dosiin-routine-quan-au-slim-crop-fpfo-527302527302.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('GOLDIE VIETNAM','890.000','0','https://dosi-in.com/file/detailed/466/dosiin-goldie-vietnam-quan-kakigoldie-fringe-washed-skinnygiat-mai-tao-hieu-ung-466998466998.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','700.000','1.400.000','https://dosi-in.com/file/detailed/216/dosiin-adidas-quan-dui-the-thao-nam-adidas-m-primeblue-sh-gl-216376216376.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SOMEHOW','350.000','0','https://dosi-in.com/file/detailed/386/dosiin-somehow-quan-jogger-nam-bg-word-stickers-chat-ni-chan-cua-day-dan-jg-somehow-386641386641.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('95MILES','495.000','0','https://dosi-in.com/file/detailed/484/dosiin-miles-quan-tay-unisex-miles-eclipse-trousers-v-484530484530.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ZOMBIE','280.000','0','https://dosi-in.com/file/detailed/480/dosiin-zombie-quan-zombie-slim-fit-trousers-nude-480952480952.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SOMEHOW','380.000','0','https://dosi-in.com/file/detailed/390/dosiin-somehow-quan-dai-nu-kaki-bell-bottom-chat-kaki-thoai-mai-wqd-somehow-390958390958.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('HADES','450.000','0','https://dosi-in.com/file/detailed/525/dosiin-hades-lorryload-cargo-short-525426525426.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
-- 18
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SSSTUTTER','399.000','0','https://dosi-in.com/file/detailed/339/dosiin-routine-quan-dai-kakhislim-crop-fpca-c-339245339245.jpg?w=320&h=320&fit=fill&fm=https://dosi-in.com/file/detailed/404/dosiin-ssstutter-quan-dai-nu-ssstutter-chat-khaki-ong-gap-culottes-pants-404697404697.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SAIGOMON','569.000','0','https://dosi-in.com/file/detailed/473/dosiin-saigomon-nam-bacpants-473632473632.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SOMEHOW','176.000','220.0000','https://dosi-in.com/file/detailed/344/dosiin-somehow-quan-dui-thun-nam-inf-mauchat-vai-thun-the-thao-day-dan-co-gian-nhesbsomehow-3442344274.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('BOBUI','750.000','000','https://dosi-in.com/file/detailed/190/dosiin-bobui-bebibo-overprinted-shortblack-190214190214.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('BITTER PILLS','190.000','000','https://dosi-in.com/file/detailed/446/dosiin-bitter-pills-quan-short-neon-bitter-pills-446672446672.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DRIMWE','196.000','280.000','https://dosi-in.com/file/detailed/470/dosiin-drimwe-quan-kaki-phom-rong-tui-hop-unisex-drimbox-470610470610.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('AZIERLOCO','185.000','250.000','https://dosi-in.com/file/detailed/388/dosiin-azierloco-quan-short-thun-gan-biker-azier-388194388194.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','1.039.000','2.590.000','https://dosi-in.com/file/detailed/170/dosiin-mlb-quan-jogger-lung-thun-seamball-woven-170106170106.jpg?w=320&h=320&fit=fill&fm=webp','6','1','');

-- áo sơ mi
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CHIC CLOTHING','429.000','00','https://dosi-in.com/file/detailed/91/dosiin-chic-clothing-flannel-shirt-purple-orange-9100191001.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','195.000','240.000','https://dosi-in.com/file/detailed/509/dosiin-fiin-ao-so-mi-nu-khoet-vai-hoa-tiet-ke-soc-xanh-duong-basic-ulzzang-tot-made-by-toneonton509796.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ICON DENIM','240.000','300.000','https://dosi-in.com/file/detailed/521/dosiin-icon-denim-ao-somi-icondenim-graffiti-521807521807.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('YELLOW FLICKER','290.000','00','https://dosi-in.com/file/detailed/386/dosiin-yellow-flicker-somi-mix-386186386186.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SSSTUTTER','399.000','419.000','https://dosi-in.com/file/detailed/91/dosiin-chic-clothing-flannel-shirt-purple-orange-9100191001.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('TOTOSHOP','320.000','00','https://dosi-in.com/file/detailed/116/dosiin-totoshop-toto-men-shirt-blackm-smd-116941116941.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('LYOS','499.000','00','https://dosi-in.com/file/detailed/357/dosiin-lyos-ao-so-mi-the-gambits-shirt-357037357037.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ZOMBIE','320.000','00','https://dosi-in.com/file/detailed/481/dosiin-zombie-ao-so-mi-zombie-short-sleeve-pyjama-shirt-black-481150481150.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SOMEHOW','330.000','00','https://dosi-in.com/file/detailed/402/dosiin-somehow-ao-so-mi-nam-inf-hai-tuim-chat-vai-polyester-cao-cap-smsomehow-402123402123.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MENDE','304.500','350.000','https://dosi-in.com/file/detailed/380/dosiin-mende-mende-demon-shirt-ao-so-mi-nam-tay-ngan-380484380484.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('5THEWAY','259.000','00','https://dosi-in.com/file/detailed/190/dosiin-theway-strokebig-logo-flannel-shirtred-white-190394190394.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SIXTYEIGHT','450.000','00','https://dosi-in.com/file/detailed/224/dosiin-sixtyeight-somi-soc-doc-224484224484.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ZUNE.ZX','550.000','00','https://dosi-in.com/file/detailed/356/dosiin-zune-zx-ao-so-mi-tay-dai-logomania-shirtdenzunezx-356427356427.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('1-OAK','450.000','00','https://dosi-in.com/file/detailed/220/dosiin-oak-flannel-brown-220062220062.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ROUTINE','472.000','00','https://dosi-in.com/file/detailed/188/dosiin-routine-ao-so-mi-form-rong-xep-ly-sau-sshlw-188320188320.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MENDE','250.000','350.000','https://dosi-in.com/file/detailed/380/dosiin-mende-mende-pink-cloud-shirt-ao-so-mi-tay-ngan-mende-chinh-hang-380394380394.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('REMINDER','190.000','380.000','https://dosi-in.com/file/detailed/359/dosiin-reminder-ao-so-mi-reminder-lambo-shirt-local-brand-nam-nu-unisex-359495359495.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SIXTYEIGHT','340.000','00','https://dosi-in.com/file/detailed/224/dosiin-sixtyeight-somi-caro-freesize-c-224374224374.jpg?w=320&h=320&fit=fill&fm=webp','5','1','');

-- áo sweater
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('HADES','590.000','00','https://dosi-in.com/file/detailed/382/dosiin-hades-ordinary-pullover-382100382100.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','3.190.000','00','https://dosi-in.com/file/detailed/350/dosiin-mlb-mlb-ao-sweatshirt-phom-suong-monogram-all-over-350986350986.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SOUL OF A NATION','375.000','410.000','https://dosi-in.com/file/detailed/341/dosiin-soul-of-a-nation-sweater-unisex-in-chu-trang-cao-cap-my-saigon-form-basic-vai-ni-bong-cha341061.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MISTERM','197.500','395.000','https://dosi-in.com/file/detailed/470/dosiin-misterm-ao-flap-sweater-470355470355.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DRAGONBYBOI','320.000','390.000','https://dosi-in.com/file/detailed/377/dosiin-dragonbyboi-ao-sweater-ni-bong-co-cao-slogan-dgb-nam-nu-form-rongunisexbasic-tron-den-swe377948.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('1-OAK','450.000','00','https://dosi-in.com/file/detailed/220/dosiin-oak-pocket-sweater-white-220069220069.jpeg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('HADES','650.000','00','https://dosi-in.com/file/detailed/513/dosiin-hades-smoke-billows-jacket-513258513258.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ENVYLOOK','350.000','559.000','https://dosi-in.com/file/detailed/85/dosiin-envylook-ao-hoodie-ni-tui-mau-black-kangaroo-envylook-kangaroo-rouge-mtm-8584285842.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','274.500','305.000','https://dosi-in.com/file/detailed/227/dosiin-fiin-ao-khoac-ni-bong-beautiful-ent-made-by-fiin-227021227021.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','2.990.000','00','hhttps://dosi-in.com/file/detailed/406/dosiin-mlb-mlb-ao-sweatshirt-tay-dai-co-tron-diamond-monogram-406339406339.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ROUTINE','312.000','390.000','https://dosi-in.com/file/detailed/529/dosiin-routine-ao-sweatshirt-nu-regular-fswew-529506529506.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('1-OAK','450.000','00','https://dosi-in.com/file/detailed/507/dosiin-oak-bbsw-sweater-salmon-507848507848.jpeg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('IMA GOD BREAKER','328.000','410.000','https://dosi-in.com/file/detailed/353/dosiin-ima-god-breaker-ao-sweater-black-graffiti-ima-god-breakerigb-353248353248.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','185.000','220.000 ','https://dosi-in.com/file/detailed/226/dosiin-fiin-ao-so-mi-nu-baby-co-beo-xanh-trang-ulzzang-made-by-fiin-226885226885.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('TEELAB','259.000','400.000','https://dosi-in.com/file/detailed/369/dosiin-teelab-ao-dai-tay-sweater-teelab-x-you-ls-369860369860.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('HADES','700.000','00','https://dosi-in.com/file/detailed/530/dosiin-hades-monogram-cardigan-530703530703.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('1-OAK','450.000','00','https://dosi-in.com/file/detailed/220/dosiin-oak-bbsw-sweater-dark-blue-220129220129.jpeg?w=320&h=320&fit=fill&fm=webp','4','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','3.190.000','00','https://dosi-in.com/file/detailed/350/dosiin-mlb-mlb-ao-sweatshirt-phom-suong-monogram-all-over-350986350986.jpg?w=320&h=320&fit=fill&fm=webp','4','1','');


-- áo hoodie
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('REGODS','500.000','00','https://dosi-in.com/file/detailed/351/dosiin-regods-ao-hoodie-color-theu-regods-unisex-form-rong-hoodie-color-351969351969.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('WHITEHAND STUDIO','225.000','450.000','https://dosi-in.com/file/detailed/436/dosiin-whitehand-studio-gradient-hoodies-black-436010436010.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('LEVENTS','620.000','00','https://dosi-in.com/file/detailed/497/dosiin-levents-ao-hoodie-zipper-levents-mini-logowhite-497318497318.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ETERNITY','320.000','00','https://dosi-in.com/file/detailed/385/dosiin-eternity-hoodie-zip-eternity-385367385367.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('BITTER PILLS','550.000','00','https://dosi-in.com/file/detailed/446/dosiin-bitter-pills-ao-hoodie-steel-p-i-l-lmautrang-kem-denbitter-pills-446687446687.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('GORI','406.000','580.000','https://dosi-in.com/file/detailed/358/dosiin-gori-ao-hoodie-gori-den-358712358712.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('GAMBLE WORLDWIDE','825.000','00','https://dosi-in.com/file/detailed/427/dosiin-gamble-worldwide-mixed-fullzip-hoodieao-hoodie-day-keo-vai-ni-bonggamble-worldwide-427881427881.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DONQUIX','250.000','00','https://dosi-in.com/file/detailed/229/dosiin-donquix-donquix-hoodie-229280229280.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MVR MAVERICK','399.000','00','https://dosi-in.com/file/detailed/505/dosiin-mvr-maverick-ao-hoodie-tui-mat-lgbt-co-gay-les-pede-nam-nu-co-tron-hinh-in-pride-tu-hao-c505340.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','4.090.000','00','https://dosi-in.com/file/detailed/516/dosiin-mlb-mlb-ao-hoodie-tay-dai-phoi-mu-grafitti-allover-overfit-516461516461.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MISSOUT','349.000','535.00','https://dosi-in.com/file/detailed/508/dosiin-missout-green-wave-hoodie-halfzip-mst-508562508562.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('T-MAG','480.000','00','https://dosi-in.com/file/detailed/223/dosiin-t-mag-brain-freeze-hoodie-v-223766223766.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('PREMIER','800.000','00','https://dosi-in.com/file/detailed/506/dosiin-premier-camp-patchhoodie-black-ft-506975506975.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('TOTOSHOP','385.000','00','https://dosi-in.com/file/detailed/116/dosiin-totoshop-toto-hodie-totoshop-tanu-akh-116631116631.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('OUTERITY','340.000','00','https://dosi-in.com/file/detailed/401/dosiin-outerity-ao-khoac-hoodie-outerity-mini-signature-ni-bong-orp-401939401939.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('OTIS CLUB','350.000','420.000','https://dosi-in.com/file/detailed/466/dosiin-otis-club-ao-khoac-hoodie-pastel-466567466567.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('GOLDIE VIETNAM','680.000','00','https://dosi-in.com/file/detailed/466/dosiin-goldie-vietnam-ao-hoodiegoldie-principles-of-pleasuregiat-nhuom-acidni-french-terry-mau-c466919.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('OTIS CLUB','350.000','00','https://dosi-in.com/file/detailed/466/dosiin-otis-club-ao-khoac-otis-club-hoodie-nut-bts-466576466576.jpg?w=320&h=320&fit=fill&fm=webp','3','1','');

-- áo thun
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('KAK','199.000','00','https://dosi-in.com/file/detailed/466/dosiin-otis-club-ao-khoac-otis-club-hoodie-nut-bts-466576466576.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NEEDS OF WISDOM','210.000','420.000','https://dosi-in.com/file/detailed/140/dosiin-needs-of-wisdom-fall-apart-washed-tee-140447140447.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('PREMIER','700.000','00','https://dosi-in.com/file/detailed/506/dosiin-premier-ao-thun-ph-elephant-rf-rainbow-pt-506281506281.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('REALITY','279.000','00','https://dosi-in.com/file/detailed/370/dosiin-reality-ao-thun-black-white-370985370985.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('OTIS CLUB','200.000','320.000','https://dosi-in.com/file/detailed/466/dosiin-otis-club-ao-thun-colorful-otis-club-466463466463.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MYO','300.000','00','https://dosi-in.com/file/detailed/110/dosiin-myo-ao-thun-parasite-den-110127110127.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MVR MAVERICK','200.000','00','https://dosi-in.com/file/detailed/444/dosiin-mvr-maverick-ao-thun-nu-hong-cotton-thoang-mat-xoxo-de-thuong-cho-ngay-le-tinh-nhan-nguoi444577.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('CHODOLE','165.000','00','https://dosi-in.com/file/detailed/438/dosiin-chodole-ao-thun-tron-unisex-cottonmauxanh-ngocvangcam-datxamtrangdenxanh-duong-438614438614.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','459.500','919.000','https://dosi-in.com/file/detailed/387/dosiin-nike-bong-da-nam-nike-as-m-nk-dry-strke-top-ss-cw-387704387704.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('NIKE','333.000','00','https://dosi-in.com/file/detailed/374/dosiin-nike-ao-phong-ao-thun-nam-nike-as-m-nsw-tee-sbn-core-ar-374722374722.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('BADHABITS','430.000','00','https://dosi-in.com/file/detailed/411/dosiin-badhabits-neva-stop-washed-tee-411201411201.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('VANS','720.000','800.000','https://dosi-in.com/file/detailed/329/dosiin-vans-ao-thun-vans-m-ap-box-liner-ii-ss-b-tee-vn-a-pwht-329658329658.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('KAK','220.000','00','https://dosi-in.com/file/detailed/48/dosiin-kak-ao-thun-in-chu-sad-birds-still-sing-lika-kakclone-48393.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ACMÉ DE LA VIE','1.199.000 ','1.599.000','https://dosi-in.com/file/detailed/499/dosiin-acme-de-la-vieadlv-ao-thun-ngan-tay-co-tron-adlv-nam-nu-orange-graffiti-trang-adlv-499733499733.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DEGREY','190.000','00','https://dosi-in.com/file/detailed/419/dosiin-degrey-ao-thun-han-quoc-limited-tim-ahq-limited-tim-419087419087.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('KAK','159.000','00','https://dosi-in.com/file/detailed/45/LIKA11042014-T3__no_text_.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DINO$AUR','380.000','00','https://dosi-in.com/file/detailed/382/dosiin-dino-aur-ao-thun-dino-aur-basic-green-tee-382929382929.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('STAY TRUE CLOTHES','300.000','00','https://dosi-in.com/file/detailed/226/dosiin-stay-true-clothes-ao-thun-unisex-local-brand-staytrue-226725226725.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DVRK','620.000','00','https://dosi-in.com/file/detailed/416/dosiin-dvrk-dvrk-prive-logo-tee-plt-female-black-416847416847.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','75.000','150.000','https://dosi-in.com/file/detailed/227/dosiin-fiin-ao-thun-tay-lo-honey-peach-fiinstore-227617227617.jpg?w=320&h=320&fit=fill&fm=webp','2','1','');

--áo khoác
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('XXME','450.000','150.000','https://dosi-in.com/file/detailed/141/dosiin-xxme-donut-rawr-cardigan-pink-141630141630.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('SIXTYEIGHT','490.000','150.000','https://dosi-in.com/file/detailed/224/dosiin-sixtyeight-blazer-tron-224736224736.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','1.050.000','1.100.000','https://dosi-in.com/file/detailed/207/dosiin-adidas-ao-khoac-tennis-nu-adidas-w-woven-jkt-fs-207732207732.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','381.800','415.000','https://dosi-in.com/file/detailed/371/dosiin-fiin-ao-khoac-long-cuu-co-mu-fiintasy-ent-made-by-fiin-371987371987.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('XXME','570.000','000','https://dosi-in.com/file/detailed/338/dosiin-xxme-global-fleece-jacket-pink-338408338408.jpeg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('FIIN','377.568','000','https://dosi-in.com/file/detailed/227/dosiin-fiin-ao-khoac-jeans-unisex-nhieu-mau-denxanh-nhatxanh-dam-made-by-fiin-227030227030.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DAVIES','289.000','000','https://dosi-in.com/file/detailed/471/dosiin-davies-ao-khoac-da-nu-dang-ngan-local-brand-davies-leather-cropped-varsity-jacket-471330471330.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ENVYLOOK','350.000','699.000','https://dosi-in.com/file/detailed/74/dosiin-envylook-ao-khoac-cardigan-gan-tron-envylook-livingtrick-cardigan-7403574035.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MARCHY','380.000','000','https://dosi-in.com/file/detailed/353/dosiin-marchy-marchy-skool-cardigan-ao-khoac-cardigan-353452353452.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('BIRDYBAG','580.000','000','https://dosi-in.com/file/detailed/509/dosiin-birdybag-ao-khoac-bomber-varsity-birdybagunisex-phong-cachstreetwear-509108509108.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ICON DENIM','449.000','580.000','https://dosi-in.com/file/detailed/221/dosiin-icon-denim-ao-khoac-jean-classic-all-black-221830221830.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('XXME','490.000','000','https://dosi-in.com/file/detailed/233/dosiin-xxme-unique-jacket-white-233653233653.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','2.799.000','3.990.000','https://dosi-in.com/file/detailed/170/dosiin-mlb-ao-khoac-kieu-phoi-mu-trum-monogram-training-170130170130.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ADIDAS','960.000','1.600.000','https://dosi-in.com/file/detailed/220/dosiin-adidas-ao-khoac-tap-luyen-nam-adidas-m-mt-fz-hd-h-220412220412.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('MLB','5.190.000','000','https://dosi-in.com/file/detailed/527/dosiin-mlb-mlb-ao-khoac-bomber-tre-trung-basic-baseball-fleece-527699527699.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ICON DENIM','440.000','000','https://dosi-in.com/file/detailed/526/dosiin-icon-denim-ao-khoac-icondenim-w-details-526659526659.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('ICON DENIM','580.000','000','https://dosi-in.com/file/detailed/395/dosiin-icon-denim-ao-khoac-jean-icon-denim-new-look-395322395322.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('TEELAB','550.000','000','https://dosi-in.com/file/detailed/406/dosiin-teelab-ao-khoac-teelab-signature-windbreaker-hong-ak-406076406076.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('VANS','1.080.000','1.200.000','https://dosi-in.com/file/detailed/329/dosiin-vans-ao-khoac-vans-check-mark-track-jacket-vn-au-blk-329924329924.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');
INSERT INTO `product`(`name`, `price`, `sale_price`, `image`, `category_id`, `status`, `description`) VALUES ('DAVIES','289.000','000','https://dosi-in.com/file/detailed/232/dosiin-davies-ao-khoac-du-nu-form-rong-davies-davies-farm-jacket-232763232763.jpg?w=320&h=320&fit=fill&fm=webp','1','1','');











-- blog
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-1.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-2.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-3.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog4.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog5.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog6.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog7.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog8.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog9.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
-- đảo vị trí 1
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-1.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog9.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-2.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog6.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-3.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog8.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog4.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog7.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog5.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
-- tiếp 2
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-1.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog4.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog8.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog6.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-3.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-2.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog9.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog5.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog7.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
-- tiếp 3
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-1.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-3.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog4.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog-thumb-2.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog7.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog6.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog8.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog5.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");
INSERT INTO `blog`(`image`, `title`) VALUES ('https://mg-fashion.mgtechnologies.co.in/assets/images/blog/blog9.jpg',"5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day");