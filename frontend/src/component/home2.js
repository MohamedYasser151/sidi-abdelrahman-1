// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Home2() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true
//     });
//   }, []);

//   const cards = [
//     {
//       text: "Your future is created by what you do today.",
//       textAr: "مستقبلك يصنعه ما تفعله اليوم.",
//       img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       animation: "fade-right"
//     },
//     {
//       text: "Success starts with self-belief.",
//       textAr: "النجاح يبدأ بالإيمان بنفسك.",
//       img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
//       animation: "fade-left"
//     },
//     {
//       text: "Don't stop until you're proud.",
//       textAr: "لا تتوقف حتى تفخر بنفسك.",
//       img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
//       animation: "fade-right"
//     },
//     {
//       text: "Every day is a new opportunity.",
//       textAr: "كل يوم فرصة جديدة.",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//       animation: "fade-left"
//     }
//   ];

//   return (
//     <div style={styles.container}>

          
//  <div className="cards">

//       {cards.map((card, index) => (

//         <div
//           key={index}
//           style={{
//             ...styles.card,
//             flexDirection: index % 2 === 0 ? "row" : "row-reverse"
//           }}
//           data-aos={card.animation}
//         >

//           <img src={card.img} style={styles.image} />

//           <div style={styles.textBox}>
//             <h2 style={styles.en}>{card.text}</h2>
//             <p style={styles.ar}>{card.textAr}</p>
//           </div>

//         </div>

//       ))}
// </div>
//     </div>
//   );
// }
// const styles = {

//   container: {
//     width: "100%",
//     minHeight: "100vh",
//   background:"linear-gradient(135deg, #020617, #1b80f4)",
//     padding: "110px 25%", 
//     color: "white",
//     boxSizing: "border-box",
//     // padding:"120px 00"
//   },

//   card: {
//     display: "flex",
//     alignItems: "center",
//     gap: "30px",
//     marginBottom: "80px",
//     flexWrap: "wrap" // إضافة هذا ليصبح متجاوب
//   },

//   image: {
//     width: "60%",
//     maxWidth: "600px",
//     height: "350px",
//     objectFit: "cover",
//     borderRadius: "15px",
//     boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
//     flex: "1 1 300px", // يسمح بالتصغير على الشاشات الصغيرة
//     minWidth: "250px"
//   },

//   textBox: {
//     flex: "1 1 40%",
//     minWidth: "250px",
//     padding: "10px",
//     boxSizing: "border-box"
//   },

//   en: {
//     fontSize: "clamp(18px, 2vw, 32px)",
//     marginBottom: "10px",
//     lineHeight: "1.4"
//   },

//   ar: {
//     fontSize: "clamp(16px, 1.8vw, 24px)",
//     color: "#38bdf8",
//     lineHeight: "1.5"
//   }

// };
// export default Home2;