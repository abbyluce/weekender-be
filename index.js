const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.locals.title = 'Weekender';
app.locals.trips = [
    { 
        id: '1', 
        city_name: `Ft. Collins`,
        city_image: `https://downtownfortcollins.com/wp-content/uploads/2021/07/Flowers-Linden-Hotel-Richard-Haro.jpg`,
        city_desc: `Known for beer and bike trails, and an adorable Old Town historic district with 1800s houses, a vintage trolley, specialty shops and restaurants.`, 
        stay: `The Elizabeth Hotel`,
        stay_link: `https://www.theelizabethcolorado.com/`,
        stay_image: `https://d3qk3qhztj1yeo.cloudfront.net/theelizabethcolorado.com-1048483801/cms/cache/v2/5a958de57f752.jpg/1920x1080/resize/80/1037fba245e5ec09f06093d11f9a180c.jpg`,
        day_activity_1: `Picnic and SUP at Horsetooth Resevoir`,
        day_activity_1_image: `https://townsquare.media/site/973/files/2022/04/attachment-mick-haupt-lJAsVVReXv4-unsplash.jpg?w=630&q=75`,
        day_activity_2: `Bike to Odell Brewing Co`,
        day_activity_2_image: `https://www.odellbrewing.com/wp-content/uploads/2020/05/FoCoLandingPageCallout.jpg`,
        restaurant_1: `The Farmhouse at Jessup Farm`,
        restaurant_2: `Lucile's`,
        hours_from_denver: 1.5,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d780554.0752678759!2d-105.59268625679223!3d40.16367743958061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x87694a4590f030ad%3A0xa9b14228b4ab4082!2sFort%20Collins%2C%20CO!3m2!1d40.5852602!2d-105.084423!5e0!3m2!1sen!2sus!4v1663712970028!5m2!1sen!2sus" 
    },
    { 
        id: '2', 
        city_name: `Boulder`,
        city_image: `https://cdn2.orangecoast.com/wp-content/uploads/sites/7/2021/07/Photo-of-Front-with-Cityscape_Marissa-Daily-CMYK.jpg`,
        city_desc: `Boulder is a city at the foothills of the Rocky Mountains. To the west, the trail-lined Flatirons are craggy rock formations overlooking the city. Downtown's pedestrian Pearl Street Mall includes art galleries, cafes, restaurants and boutiques. The University of Colorado Boulder campus is home to the Fiske Planetarium and the Museum of Natural History, with zoology and anthropology exhibits.`,  
        stay: `Hotel Boulderado`,
        stay_link: `https://www.boulderado.com/`,
        stay_image: `https://cdn.5280.com/2017/08/IMG_0437.jpg`,
        day_activity_1: `Hike Gregory Canyon`,
        day_activity_1_image: `https://yourboulder.com/wp-content/uploads/2021/09/IMG_4976-1-e1465998639585.jpg`,
        day_activity_2: `Wander Pearl Street`,
        day_activity_2_image: `https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boulder/Pearl_Steet_in_Sunlight_Man_Walking_Away_5a5aa2a3-9fc2-4e8b-9bf3-b75a26952a01.jpg`,
        restaurant_1: `Sherpa's Adventure Restaurant and Bar`,
        restaurant_2: `Efrain's`,
        hours_from_denver: .5,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d195956.39378338936!2d-105.27074789441247!3d39.87829984109298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x876b8d4e278dafd3%3A0xc8393b7ca01b8058!2sBoulder%2C%20CO!3m2!1d40.014985599999996!2d-105.27054559999999!5e0!3m2!1sen!2sus!4v1663712680136!5m2!1sen!2sus"
    },
    { 
        id: '3', 
        city_name: `Breckenridge`,
        city_image: `https://cms.inspirato.com/ImageGen.ashx?image=/media/9398795/gettyimages-498798436.jpg&width=1200`,
        city_desc: `Breckenridge is a Colorado town at the base of the Rocky Mountains' Tenmile Range. It's known for its ski resort, year-round alpine activities and Gold Rush history. The Victorian core of this former mining town is preserved as the Breckenridge National Historic District, running primarily along Main Street, with colorfully painted buildings from the 1880s and '90s housing shops, galleries and restaurants.`, 
        stay: `AirBnB: Breck Loft`,
        stay_link: `https://www.airbnb.com/rooms/46798950?adults=2&children=0&infants=0&check_in=2022-10-22&check_out=2022-10-28&federated_search_id=73d02600-5271-4c53-951d-106b29876a2b&source_impression_id=p3_1663713242_i%2FUbpS1pZaHomvtV`,
        stay_image: `https://a0.muscache.com/im/pictures/miso/Hosting-46798950/original/0dd7dfc0-1b28-4996-a7af-2ba8ec9d275a.jpeg?im_w=1440`,
        day_activity_1: `McCullough Gulch Hike`,
        day_activity_1_image: `https://news.ucdenver.edu/wp-content/uploads/2019/03/McCullough-Gulch-White-Falls-e1535573893680-1200x800.jpg`,
        day_activity_2: `Wander Main Street`,
        day_activity_2_image: `https://brecknetwork.com/wp-content/uploads/2020/01/Summer-Town-Scenic-Sunset-1536x1048.jpg`,
        restaurant_1: `Breckenridge Distillery`,
        restaurant_2: `Sancho Tacos & Tequila`,
        hours_from_denver: 1.5,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d393364.6130826408!2d-105.82306051930065!3d39.6235777289523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x876af63d6c26e7c1%3A0x628d8f7f6680a27a!2sBreckenridge%2C%20CO!3m2!1d39.481653699999995!2d-106.0383518!5e0!3m2!1sen!2sus!4v1663713936206!5m2!1sen!2sus"
    },
    { 
        id: '4', 
        city_name: `Salida`, 
        city_image: `https://www.mycoloradoparks.com/wp-content/uploads/2020/07/salida-arkansas-river-colorado-p6y9272_courtesychaffee_1600.jpg`,
        city_desc: `The majestic 14,000 foot peaks of the Sawatch Range lining up to the west and the mighty Arkansas River that flows the length of the valley are waiting for you to come and hike, bike, golf, raft, fish, soak or simply bask in their glory.`, 
        stay: `Amigo Motor Lodge`,
        stay_link: `https://amigomotorlodge.com/`,
        stay_image: `https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1290207.jpg`,
        day_activity_1: `Whitewater Rafting in Brown's Canyon`,
        day_activity_1_image: `https://i0.wp.com/whitewater.net/wp-content/colorado-whitewater-rafting-photos/1989871-900x597.jpg?resize=900%2C597`,
        day_activity_2: `Mt Princeton Hot Springs`,
        day_activity_2_image: `https://mtprinceton.com/wp-content/uploads/header-spring-hot-springs-scaled.jpg`,
        restaurant_1: `Currents`,
        restaurant_2: `Amicas Pizza Microbrew & More`,
        hours_from_denver: 3,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d792148.3061755538!2d-106.22852730995344!3d39.14449074615909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x871517c051b82e5d%3A0xba2bef0021afe1b6!2sSalida%2C%20CO!3m2!1d38.5347193!2d-105.99890219999999!5e0!3m2!1sen!2sus!4v1663714780131!5m2!1sen!2sus"
    },
    { 
        id: '5', 
        city_name: `Taos`,
        city_image: `https://casaescondida.com/wp-content/uploads/2020/06/bigstock-Taos-Valley-New-Mexico-At-Sun-234068839-1.jpg`,
        city_desc: `Taos is a town in northern New Mexico's high desert, bounded by the Sangre de Cristo Mountains. It's known for historic adobe buildings such as Taos Pueblo, a multistory adobe complex inhabited by Native Americans for centuries. A longtime artist colony, Taos also offers many galleries and museums showcasing regional artwork, including the Harwood Museum of Art and the Taos Art Museum.`,  
        stay: `Hotel Luna Mystica`,
        stay_link: `https://hotellunamystica.com/`,
        stay_image: `https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/05/Hotel-Luna-MysticaImage-1.jpg`,
        day_activity_1: `Ski Taos Valley and Apres at the Bavaria`,
        day_activity_1_image: `https://www.skimag.com/wp-content/uploads/2020/10/ski1120-rgw4-toas-courtesy-1.jpg`,
        day_activity_2: `Black Rock Hot Springs`,
        day_activity_2_image: `https://i.pinimg.com/originals/5a/e6/d3/5ae6d3909857257331e55ea7d6937344.jpg`,
        restaurant_1: `Orlandos`,
        restaurant_2: `The Love Apple`,
        hours_from_denver: 5,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3218033.330630238!2d-107.29276808970143!3d38.03285487593096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x871764da7f11fcb1%3A0x90ea918361a9b782!2sTaos%2C%20NM!3m2!1d36.407213399999996!2d-105.5733788!5e0!3m2!1sen!2sus!4v1663715601446!5m2!1sen!2sus"
    },
    { 
        id: '6', 
        city_name: `Steamboat`, 
        city_image: `https://coloradomtn.edu/wp-content/uploads/2020/01/steamboat-downtown-ski-areas-dusk.jpg`,
        city_desc: `Steamboat Springs is a city in northern Colorado's Yampa Valley. It's home to the Steamboat ski resort with 6 peaks including Mount Werner. The city's geothermal hot springs are said to have therapeutic properties. Near the city center, the long-standing Old Town Hot Springs is equipped with swimming and soaking pools, plus water slides.`,  
        stay: `AirBnB: Sunset Sanctuary`,
        stay_link: `https://www.airbnb.com/rooms/51168915?adults=2&children=0&infants=0&check_in=2022-10-17&check_out=2022-10-22&federated_search_id=c394a614-add7-4deb-bc2f-b55abbb4e162&source_impression_id=p3_1663717471_Gbs25y7CCCciOyM6`,
        stay_image: `https://a0.muscache.com/im/pictures/b61fcc4e-5389-4dc3-8b10-30dc33d67ebc.jpg?im_w=1200`,
        day_activity_1: `Strawberry Hot Springs`,
        day_activity_1_image: `https://cdn.5280.com/2017/09/hot-springs1_Cook.jpg`,
        day_activity_2: `Tube the Yampa River`,
        day_activity_2_image: `https://cdn.steamboatpilot.com/wp-content/uploads/sites/8/2020/07/Tubing-sbt-072820-1024x671.jpg`,
        restaurant_1: `Salt & Lime`,
        restaurant_2: `Laundry`,
        hours_from_denver: 3,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d781531.0218332594!2d-106.4792916141116!3d40.07863400210336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x87427b8109564661%3A0x1ba8a3d1486ecf7d!2sSteamboat%20Springs%2C%20Colorado%2080487!3m2!1d40.4849769!2d-106.8317158!5e0!3m2!1sen!2sus!4v1663717664692!5m2!1sen!2sus"
    },
    { 
        id: '7', 
        city_name: `Pagosa Springs`, 
        city_image: `http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQRdfM2HZBYhmMmV2kIiVM7R9InVKai1R4htzmpxDJMN5RUVjNuFNyhculyIUubYId1`,
        city_desc: `Pagosa Springs is a town in southwest Colorado known for its hot springs. It's surrounded by the rugged San Juan Mountains and vast areas of national forest. The San Juan River, with its abundant trout, runs through town. To the northeast, Wolf Creek Ski Area offers downhill runs and cross-country trails.`,  
        stay: `The Nightingale Motel`,
        stay_link: `https://thenightingalemotel.com/`,
        stay_image: `https://images.squarespace-cdn.com/content/v1/5e2f5da83950b37922c3b79a/1589558838502-LWMQ8NL4M9KGFCRG9OZL/DSC_0003_0001.jpg?format=2500w`,
        day_activity_1: `Pagosa Hot Springs`,
        day_activity_1_image: `https://www.pagosahotsprings.com/content/uploads/2021/03/Springs-Web-Images-119-1920x740.jpg`,
        day_activity_2: `Ski Fresh Powder at Wolf Creek`,
        day_activity_2_image: `https://wolfcreekski.com/wp-content/themes/shop.wolfcreekski.com/images/slideshow-2021-2022/18.jpg`,
        restaurant_1: `The Neon Mallard`,
        restaurant_2: `Kip's Grill`,
        hours_from_denver: 5,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1598698.6706243092!2d-106.92800970561477!3d38.500138890724116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x873ddb6e9b07b449%3A0x7b8616cc41f8157f!2sPagosa%20Springs%2C%20Colorado%2081147!3m2!1d37.26945!2d-107.0097617!5e0!3m2!1sen!2sus!4v1663717974260!5m2!1sen!2sus"
    },
    { 
        id: '8', 
        city_name: `Carbondale`, 
        city_image: `https://www.uncovercolorado.com/wp-content/uploads/2021/03/Town-of-Carbondale-CO-1600x800-1-1600x800.jpg`,
        city_desc: `Located at the base of majestic Mt. Sopris, resting in a broad valley defined by the confluence of the Crystal and Roaring Fork Rivers. Only 30 minutes from Aspen.`,
        stay_link: `https://www.airbnb.com/rooms/54064180?adults=2&children=0&infants=0&check_in=2022-10-05&check_out=2022-10-11&federated_search_id=54971428-a5d9-4f76-ad9f-42fd2046c4ed&source_impression_id=p3_1663718071_9sPYb2htSau2KwFY`,
        stay_image: `https://a0.muscache.com/im/pictures/ec0652d3-e54e-400f-8a95-51d7e04b4cc3.jpg?im_w=1200`,
        day_activity_1: `Ski Aspen Snowmass`,
        day_activity_1_image: `https://www.aspensnowmass.com/-/media/aspen-snowmass/images/hero/hero-image/winter/2021-22/snowmass-hero-08182021.jpg?mw=1506&mh=930&hash=8711362070C02D29B00C0D09593FB504`,
        day_activity_2: `Spend a Bougie Day in Aspen`,
        day_activity_2_image: `https://media.cntraveler.com/photos/5fda74245344ec5351d1fca8/master/pass/AspenColorado-2020-GettyImages-956105512.jpg`,
        restaurant_1: `Phat Thai`,
        restaurant_2: `AXKAWA`,
        hours_from_denver: 3,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d787199.0795205979!2d-106.71790808564025!3d39.5822314078696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x8741ab97250b21d7%3A0x77d06179f7934acf!2sCarbondale%2C%20CO!3m2!1d39.4022054!2d-107.2111628!5e0!3m2!1sen!2sus!4v1663718493316!5m2!1sen!2sus"
    },
    { 
        id: '9', 
        city_name: `Grand Lake`, 
        city_image: `https://www.travellens.co/content/images/2022/05/Grand-Lake-co.jpg`,
        city_desc: `Known as the "Western Gateway" to Rocky Mountain National Park, Grand Lake has something for everyone, and the charming lakeside setting makes folks feel right at home. At an elevation of 8,369 feet, the lakeside scenery is unmatched with breathtaking views of the Rocky Mountains, surrounded by abundant wildlife and sprawling greenery.`,
        stay: `AirBnB: The Laundry Room`,
        stay_link: `https://www.airbnb.com/rooms/43915311?adults=2&children=0&infants=0&check_in=2022-10-19&check_out=2022-10-24&federated_search_id=e001e726-062c-41d2-b3f6-fd4e21ade0fe&source_impression_id=p3_1663718588_z5vJxkPqiNzE6dLo`,
        stay_image: `https://a0.muscache.com/im/pictures/miso/Hosting-43915311/original/fa7c9c9b-9d70-4d10-8123-aa4ffac87416.jpeg?im_w=1440`,
        day_activity_1: `Rent SUPs or a Pontoon and have a lake day`,
        day_activity_1_image: `https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/da/36/d8/rocky-mountain-sup.jpg`,
        day_activity_2: `Hike in Rocky Mountain National Park from the East Inlet Trailhead`,
        day_activity_2_image: `https://www.outdoorproject.com/sites/default/files/styles/hero_image_desktop_2x/public/features/img_0475fx.jpg?itok=kY9YEDqT`,
        restaurant_1: `One Love Rum Kitchen`,
        restaurant_2: `Sagebrush BBQ & Grill`,
        hours_from_denver: 2,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d782012.466078072!2d-106.24196576355656!3d40.036668946204415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x8769818358fac97d%3A0x8323c3b198872312!2sGrand%20Lake%2C%20CO!3m2!1d40.252207299999995!2d-105.82306709999999!5e0!3m2!1sen!2sus!4v1663718919400!5m2!1sen!2sus"
    },
    { 
        id: '10', 
        city_name: `Crested Butte`, 
        city_image: `https://ewscripps.brightspotcdn.com/dims4/default/2cf3d76/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F12%2F93%2F23f66da34c32a8ccc46873593ea4%2F201707-ctb-dave-kozlowski-sunset.jpg`,
        city_desc: `Crested Butte is a town in the Rocky Mountains of Colorado. Downhill ski and mountain-bike trails crisscross the slopes of Crested Butte Mountain Resort. There are Nordic ski routes around town. The West Elk Loop Scenic and Historic Byway takes in wilderness areas like Kebler Pass, to the west, known for colorful Quaking aspen trees in fall. Shops and restaurants in wooden buildings line downtown's Elk Avenue.`,
        stay: `AirBnB: Moose's Loft`,
        stay_link: `https://www.airbnb.com/rooms/50445514?adults=2&children=0&infants=0&check_in=2022-10-16&check_out=2022-10-22&federated_search_id=3e310cda-94f2-42fe-8298-6c20c3f6eb1c&source_impression_id=p3_1663721311_202I9%2BiNtaoPHP78`,
        stay_image: `https://a0.muscache.com/im/pictures/miso/Hosting-50445514/original/86c695b5-2972-412d-b70a-e20688b6c052.jpeg?im_w=1200`,
        day_activity_1: `Oh Be Joyful Hike`,
        day_activity_1_image: `https://i0.wp.com/aliciamarietravels.com/wp-content/uploads/2020/08/DSC_0073.jpg?resize=640%2C408&ssl=1`,
        day_activity_2: `Bike the 401 Trail`,
        day_activity_2_image: `https://i.ytimg.com/vi/zSZTk3BJ-nA/maxresdefault.jpg`,
        restaurant_1: `The Dogwood`,
        restaurant_2: `Secret Stash Pizza`,
        hours_from_denver: 4,
        directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d792913.7205443833!2d-106.54804236848007!3d39.076425960029844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%20Colorado!3m2!1d39.739235799999996!2d-104.990251!4m5!1s0x8740723e8a38d3e3%3A0x37006e19d5e7f39f!2sCrested%20Butte%2C%20Colorado%2081224!3m2!1d38.8697146!2d-106.9878231!5e0!3m2!1sen!2sus!4v1663721675000!5m2!1sen!2sus"
    },
];

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/trips', (request, response) => {
    const trips = app.locals.trips;
    response.json({ trips });
  });

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;