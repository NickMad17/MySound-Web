export function renderHeader() {
    // ----------------------- headerlogic --------------------
    const headerRenderElement = document.querySelector('.header-render');

    if(window.screen.width > 768){
        headerRenderElement.innerHTML = `<nav class="header__nav">
        <a href="#" class="header__item nav-active">Beats</a>
        <a href="#" class="header__item">About</a>
        <div class="header__blocks">
            <a href="#" class="header__block header__block_login"><i class='bx bx-headphone'></i><span
                    class="block__text">Contact</span></a>
            <a href="#" class="header__block header__block_search"><i class='bx bx-cart-alt'></i> <span
                    class="block__text">10$</span></a>
        </div>
    </nav>`

    const aboutSectionBtn = document.querySelectorAll('.header__item')[1];
    const beatsSectionBtn = document.querySelectorAll('.header__item')[0];


    aboutSectionBtn.addEventListener('click', () => {
        document.body.style.background = '#0d0638'
        const app = document.querySelector('.app');
        app.innerHTML = `wgrwg`;
    })

    beatsSectionBtn.addEventListener('click', () => {
        location.reload();
    })

    const logo = document.querySelector('.header__logo');
    logo.addEventListener('click', () => {
        location.reload();
    })

    // ----------------------Render app---------------------
    const headerNav = () => {
        const items = document.querySelectorAll('.header__item');
        const blocks = document.querySelectorAll('.block__text');
        const nav = [...items, ...blocks];
        console.log(nav);
        nav.forEach(navElement => {
            navElement.addEventListener('click', () => {
                nav.forEach(el => {
                    el.classList.remove('nav-active');
                })
                navElement.classList.add('nav-active');
            })
        })
    }

    headerNav();
    } else {
        
        headerRenderElement.innerHTML = ` <nav class="header__nav-mob nav-mob">
        <div class="nav-mob__head">
            <div class="header__logo mobale-logo">
        <p class="logo-animation">Ma<span class="main-color">ady</span></p>
        <div id="wave">
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
        </div>
    </div>
        </div>
            <a href="#" class="header__item nav-mob__text nav-active">Beats</a>
            <a href="#" class="header__item nav-mob__text">About</a>
            <a href="#" class="header__item nav-mob__text">Contact</a>
            <a href="#" class="header__item nav-mob__text">Cart</a>
    </nav>
    
    <div class="burger"><span></span><span></span><span></span></div>`
        
    const aboutSectionBtn = document.querySelectorAll('.header__item')[1];
    const beatsSectionBtn = document.querySelectorAll('.header__item')[0];

    const burgerPhon = document.querySelector('.header__nav-mob');
    const burger = document.querySelector(".burger");
    const htmlTag = document.querySelector('html');
    
    
    
    aboutSectionBtn.addEventListener('click', () => {
        document.body.style.background = '#0d0638'
        const app = document.querySelector('.app');
        app.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit soluta ipsum consequuntur perspiciatis unde a illum possimus alias numquam quibusdam tenetur, voluptatem non eos molestias minus deserunt eligendi ad eaque quasi voluptate distinctio! Earum natus ipsum labore cumque optio saepe quo esse corporis possimus assumenda quae neque quidem quos nulla sequi minima, consequatur laudantium commodi pariatur nisi architecto unde cum itaque nihil? Deleniti voluptatum porro id tempora vitae tenetur accusamus rerum provident explicabo fugiat modi corporis eum rem quaerat ducimus odio labore cupiditate, eius ex ab architecto sed itaque? Delectus quis aliquam ducimus ipsum deleniti quibusdam provident impedit tempora quisquam, libero incidunt dolore maxime consectetur id harum, nemo voluptate facere laboriosam omnis nostrum quaerat voluptas fugiat animi nisi? Repudiandae voluptate quo aspernatur inventore doloribus aliquid atque, debitis sint quae ex dicta, quidem culpa, fuga eveniet dolores est ullam. Voluptatibus, quaerat eaque iste, eos id facilis alias fuga non totam, soluta natus inventore praesentium odio officiis vel exercitationem quas quod rem dolore impedit modi vero? Excepturi ullam ab culpa similique aperiam suscipit id sint perspiciatis porro, explicabo vel eos, nemo voluptas saepe delectus natus adipisci sed unde. Rem at nobis perferendis qui corrupti doloremque consectetur accusantium, voluptas sit optio. Molestias a facere quasi totam unde recusandae, id repudiandae asperiores dolorem. Impedit maxime eum cupiditate architecto odio sit ex quia, cum sunt doloribus molestiae, beatae dolorum eos commodi asperiores! Nostrum, architecto deleniti? Expedita iure cumque dolor ducimus vel ipsum alias nihil tenetur, fugiat dolore excepturi provident eius sequi blanditiis illo debitis maxime ipsam voluptatem praesentium aperiam omnis? Repellendus, ipsum repudiandae. Velit odit perferendis voluptate quae qui dicta tempora hic, aliquid ut molestias totam, temporibus non deserunt nostrum autem iure. Autem, vel! Earum mollitia nesciunt iste qui. Blanditiis nobis tempora, quia doloremque suscipit cupiditate soluta molestiae sunt doloribus harum nisi molestias sed consectetur, aliquam quos? Blanditiis quibusdam ut maxime sit consectetur non, officiis nihil, voluptatum vitae aliquid amet vel aspernatur corporis quas temporibus veniam adipisci sint praesentium impedit quis perferendis dolore doloribus! Deleniti, dolore maxime. Autem numquam placeat consequuntur pariatur quia voluptate soluta tempora iusto quidem praesentium explicabo cupiditate iure, est eum. Omnis corrupti accusamus, quibusdam deleniti modi voluptates, quidem ullam, enim obcaecati iusto temporibus numquam! Qui ad assumenda eos eveniet rem a explicabo laborum ipsa fugit aliquid libero necessitatibus est, laudantium pariatur, facilis sapiente! Vero eligendi error odit suscipit ducimus facere nemo corporis nulla. Recusandae quod at corporis fugit soluta sequi? Facere beatae quidem iste illo nemo culpa quia autem saepe eum, ipsum dolorum aliquam cum totam nobis, reprehenderit distinctio nesciunt aspernatur commodi! Fugiat numquam dolor deleniti cumque veniam eos, pariatur enim suscipit sunt, error ullam reprehenderit debitis, nemo voluptas. Perferendis, saepe officia. Nesciunt accusantium deserunt aspernatur neque minima exercitationem, ipsam sint praesentium nemo ut pariatur quis est quidem sit perspiciatis laudantium vel quod, reiciendis quasi error nam impedit eius labore. Distinctio, unde voluptatum ut ducimus deleniti quo quibusdam fuga ex omnis dignissimos asperiores. Ratione, at! Aperiam sapiente maxime tempora debitis excepturi eius tenetur voluptatibus totam explicabo quae. Consequuntur iure pariatur sequi, earum veniam ratione dolor quasi, aperiam deserunt expedita totam magnam reprehenderit illo nam explicabo reiciendis voluptatem vel quos eos commodi laudantium beatae, quo numquam! Minus omnis repudiandae excepturi illum, doloribus obcaecati laboriosam. Quod doloremque illo distinctio rerum fugiat odio neque eos totam, quae vero iusto, esse rem natus magni, necessitatibus voluptatibus explicabo vel tempora voluptate deserunt dignissimos tenetur aliquid harum iste! Temporibus a omnis, architecto atque consequatur facilis officiis debitis nihil itaque non minus soluta harum? Doloribus nobis consequatur deserunt tempore odio ipsum fugiat, dolor dolorum corrupti adipisci quidem, quisquam illo reprehenderit, nisi provident maiores beatae voluptate et doloremque nulla soluta quam incidunt voluptas. Magni cumque porro officia nihil aliquam nostrum veritatis ipsam accusantium dolore illo rem id similique sunt ut harum corrupti facilis odio cupiditate magnam molestias aspernatur totam explicabo, repellendus perferendis. Qui et sed quia exercitationem commodi cumque veniam nesciunt eligendi necessitatibus, sint voluptatibus sequi aliquid nemo molestiae illum? Dolorum eos molestiae dolorem possimus nostrum sint culpa aperiam eligendi perspiciatis quis. Vel iure quisquam exercitationem ipsa nulla aperiam eaque, placeat optio doloribus, quos aliquid quia ab natus totam aliquam molestiae nisi! Ad similique tempore a voluptates quis nulla quae culpa velit inventore officia enim eum amet atque perspiciatis accusamus placeat architecto autem qui nostrum, deserunt itaque minima reprehenderit nihil. Eum eveniet, rerum consectetur aliquam dolores deserunt reprehenderit omnis laborum aut, commodi provident? Officia iste explicabo odio voluptate rerum recusandae totam suscipit cum delectus blanditiis molestias, soluta facilis, consequuntur temporibus facere architecto corrupti commodi. Aut error libero aperiam soluta nihil, tenetur odio quas obcaecati sint perferendis iure totam laudantium dignissimos placeat consequatur alias pariatur velit quaerat distinctio. Repudiandae dolores, error vitae repellendus, rem totam dolore fugiat iusto praesentium veniam minima animi, quasi eos atque ea. Et ipsum quasi nostrum inventore in voluptates quibusdam voluptatibus praesentium quisquam, labore temporibus quod distinctio consequuntur ab eos nisi sunt ullam sint quia voluptate sit. Veniam similique at tenetur a in reprehenderit id. Corrupti amet culpa natus, unde sint architecto quo dolore, consequatur quisquam totam molestiae deleniti quam vitae minus nemo magnam iste, assumenda quidem repellendus inventore voluptate animi nisi expedita. Enim nobis, ipsa consequatur odit molestias, labore aut eveniet quia harum sed officia. Dolore quaerat qui quis officiis minus debitis aliquid dolorem consequuntur corporis doloribus quo placeat alias rerum illo maiores facilis, ea molestias vitae recusandae. Dolore minima sequi quas quasi. Laborum debitis sed porro. Asperiores id saepe vitae dolor deleniti minima magnam necessitatibus dolorum quisquam. Magnam placeat qui sit dolorum! Architecto veritatis debitis quaerat eum, dolore vel quis delectus, repudiandae minima iure maiores aspernatur voluptas nostrum hic quam harum optio nihil! Ullam nulla, dolorem quis sunt mollitia optio unde porro blanditiis adipisci reiciendis nostrum dolores obcaecati exercitationem? Amet quam eos eaque recusandae obcaecati mollitia quos atque nam pariatur illum magnam eligendi non tempora, et ipsam porro placeat! Beatae molestias iste maiores a numquam non ipsa eaque saepe cupiditate neque laboriosam obcaecati ut quam facilis exercitationem, quaerat accusamus illum eligendi reprehenderit eveniet quia fugiat. Aperiam fugiat obcaecati tempora voluptatem nihil repellendus itaque.`;
    })
    
    beatsSectionBtn.addEventListener('click', () => {
        location.reload();
    })
    
    const logo = document.querySelector('.header__logo');
    logo.addEventListener('click', () => {
        location.reload();
    })
    
    // ----------------------Render app---------------------
    const headerNav = () => {
        const items = document.querySelectorAll('.header__item');
        const blocks = document.querySelectorAll('.block__text');
        const nav = [...items, ...blocks];
        console.log(nav);
        nav.forEach(navElement => {
            navElement.addEventListener('click', () => {
                burger.classList.remove('burger-active');
                burgerPhon.classList.remove('header__nav-mob-active');
                htmlTag.classList.remove('hidden');
                nav.forEach(el => {
                    el.classList.remove('nav-active');
                })
                navElement.classList.add('nav-active');
            })
        })
    }
    
    headerNav();

    burger.addEventListener('click', () =>{
        if(burger.classList.contains('burger-active')){
            burger.classList.remove('burger-active');
            burgerPhon.classList.remove('header__nav-mob-active');
            htmlTag.classList.remove('hidden');
        } else {
            burger.classList.add('burger-active');
            burgerPhon.classList.add('header__nav-mob-active');
            htmlTag.classList.add('hidden');
        }
    })
    }
}


