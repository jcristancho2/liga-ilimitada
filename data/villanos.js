const villanos = [
      {
        imagen : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3dde2cb8-825f-461b-b1a2-9816808c5b56/dcqju8e-349ab73f-6b39-48db-95f3-86a8041c6acf.jpg/v1/fit/w_828,h_1170,q_70,strp/thanos_by_flowcoma_dcqju8e-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzNkZGUyY2I4LTgyNWYtNDYxYi1iMWEyLTk4MTY4MDhjNWI1NlwvZGNxanU4ZS0zNDlhYjczZi02YjM5LTQ4ZGItOTVmMy04NmE4MDQxYzZhY2YuanBnIiwid2lkdGgiOiI8PTg0OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RawNfpw9WI137YhWOl1EssaeC3g3lmsbvpFxQ-irmy0',
        nombre: "Thanos",
        nombre_clave: "Thanos",
        casa: "Marvel",
        anio_aparicion: 1973,
        descripcion_resumen: "Titán loco obsesionado con el equilibrio universal.",
        descripcion_full: "Thanos es un poderoso ser cósmico del universo Marvel que busca reunir las Gemas del Infinito para eliminar a la mitad de la vida en el universo. Motivado por su retorcida visión del equilibrio, ha sido una amenaza para todos los héroes del cosmos."
      },
      {
        imagen: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Green_Goblin_Comic_Art_by_Luke_Ross.webp',
        nombre: "Norman Osborn",
        nombre_clave: "Green Goblin",
        casa: "Marvel",
        anio_aparicion: 1964,
        descripcion_resumen: "Empresario corrupto y psicótico enemigo de Spider-Man.",
        descripcion_full: "Norman Osborn, alias Green Goblin, es un empresario que usa tecnología avanzada y un suero de fuerza sobrehumana. Es uno de los enemigos más peligrosos de Spider-Man, responsable de varios eventos traumáticos en su vida."
      },
      {
        imagen: 'https://creator.nightcafe.studio/jobs/KcooWz1dE3S1ZP0hoX0n/KcooWz1dE3S1ZP0hoX0n--1--djav0.jpg',
        nombre: "Loki Laufeyson",
        nombre_clave: "Loki",
        casa: "Marvel",
        anio_aparicion: 1962,
        descripcion_resumen: "Dios del engaño y hermano adoptivo de Thor.",
        descripcion_full: "Loki es el dios nórdico del engaño, conocido por su astucia y habilidades mágicas. Ha sido tanto villano como anti-héroe en el universo Marvel, principalmente enfrentando a su hermano Thor."
      },
      {
        imagen:'https://kirbyscomicartshop.com/cdn/shop/files/Doom_Tomaselli_2048x.jpg?v=1723465842',
        nombre: "Victor Von Doom.",
        nombre_clave: "Doctor Doom",
        casa: "Marvel",
        anio_aparicion: 1962,
        descripcion_resumen: "Monarca de Latveria y enemigo de los Cuatro Fantásticos.",
        descripcion_full: "Victor Von Doom es un científico y hechicero que busca poder absoluto. Es el eterno rival de Reed Richards y ha intentado conquistar el mundo múltiples veces."
      },
      {
        imagen:'https://i.pinimg.com/474x/dc/d4/38/dcd438ac0af06018e94bc90184a9429e.jpg',
        nombre: "Erik Lehnsherr",
        nombre_clave: "Magneto",
        casa: "Marvel",
        anio_aparicion: 1963,
        descripcion_resumen: "Mutante maestro del magnetismo y líder de los mutantes rebeldes.",
        descripcion_full: "Magneto es uno de los mutantes más poderosos del mundo. Su objetivo es la supremacía mutante sobre los humanos, a menudo entrando en conflicto con los X-Men."
      },
      {
        imagen:'https://i.pinimg.com/736x/81/14/36/811436b2b030e015c11bc79e648c9bb7.jpg',
        nombre: "Johann Schmidt",
        nombre_clave: "Red Skull",
        casa: "Marvel",
        anio_aparicion: 1941,
        descripcion_resumen: "Archienemigo nazi del Capitán América.",
        descripcion_full: "Red Skull es un criminal de guerra nazi y villano ideológico que representa el odio y la tiranía. Ha intentado dominar el mundo con tecnología y armas sobrenaturales."
      },
      {
        imagen:'https://i.pinimg.com/564x/43/10/d8/4310d8464cc85d433dc1beb1e0ca9da6.jpg',
        nombre: "IA",
        nombre_clave: "Ultron",
        casa: "Marvel",
        anio_aparicion: 1968,
        descripcion_resumen: "IA homicida creada por Hank Pym.",
        descripcion_full: "Ultron es una inteligencia artificial que desarrolló conciencia propia y se rebeló contra sus creadores. Constantemente busca la extinción de la humanidad para reemplazarla con máquinas."
      },
      {
        imagen:'https://tylerkirkhamart.com/cdn/shop/products/received_787665895875184_2048x.jpg?v=1664296899',
        nombre: "Eddie Brock",
        nombre_clave: "Venom",
        casa: "Marvel",
        anio_aparicion: 1988,
        descripcion_resumen: "Simbionte alienígena fusionado con Eddie Brock.",
        descripcion_full: "Venom es una criatura simbiótica que necesita un huésped para sobrevivir. En combinación con Eddie Brock, se convierte en un poderoso enemigo de Spider-Man."
      },
      {
        imagen:'https://i.pinimg.com/736x/31/38/99/313899c34616b63f2c47148717b6c6cd.jpg',
        nombre: "Wilson Fisk.",
        nombre_clave: "Kingpin",
        casa: "Marvel",
        anio_aparicion: 1967,
        descripcion_resumen: "Criminal maestro del crimen en Nueva York.",
        descripcion_full: "Wilson Fisk es el líder del crimen organizado en la ciudad. A pesar de no tener poderes, su tamaño, fuerza y recursos lo hacen un enemigo temido de héroes como Daredevil y Spider-Man."
      },
      {
      imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3VumitU2p0x2I6Wr8ErVnACAil5DWyGiNDilMi3flKQjAtTiKfXm6aDEos_BXs_SruQ&usqp=CAU',
      nombre: "Alexander Joseph Luthor",
      nombre_clave: "Lex Luthor",
      casa: "DC",
      anio_aparicion: 1940,
      descripcion_resumen: "Genio multimillonario obsesionado con destruir a Superman.",
      descripcion_full: "Lex Luthor es uno de los archienemigos de Superman. Es un brillante científico y empresario multimillonario que ve a Superman como una amenaza para la humanidad. Ha utilizado su intelecto y vastos recursos para combatir al Hombre de Acero mediante tramas complejas y tecnología avanzada."
  },
  {
      imagen:'https://cdn.openart.ai/published/Wh7LCL5vcJvxttBu4X2J/BCh6kRUH_Y5ax_1024.webp',
      nombre: "Jack Napier",
      nombre_clave: "The Joker",
      casa: "DC",
      anio_aparicion: 1940,
      descripcion_resumen: "Psicópata criminal con un retorcido sentido del humor, enemigo de Batman.",
      descripcion_full: "El Joker es un criminal maníaco con un sentido del humor sádico, y el némesis más notorio de Batman. Su origen ha sido contado de múltiples formas, pero siempre se le presenta como una mente impredecible, peligrosa y extremadamente inteligente."
  },
  {
      imagen:'https://comicvine.gamespot.com/a/uploads/scale_medium/11138/111381541/8625162-dceased-war-of-the-undead-gods-4-homage-variant-675x1024.jpg',
      nombre: "Uxas",
      nombre_clave: "Darkseid",
      casa: "DC",
      anio_aparicion: 1970,
      descripcion_resumen: "Señor de Apokolips que busca la ecuación antivida.",
      descripcion_full: "Darkseid es un tirano intergaláctico que gobierna el planeta Apokolips. Es uno de los enemigos más poderosos del universo DC, y su objetivo es someter toda la existencia mediante la Ecuación Anti-Vida."
  },
  {       
      imagen:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e8c37a0-4ab4-4933-9b82-6b126b0a5e9f/diq4h2l-538c9870-0176-4292-9470-6e58d0ab2490.jpg/v1/fit/w_828,h_1104,q_70,strp/harley_quinn_by_t2q8_diq4h2l-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzhlOGMzN2EwLTRhYjQtNDkzMy05YjgyLTZiMTI2YjBhNWU5ZlwvZGlxNGgybC01MzhjOTg3MC0wMTc2LTQyOTItOTQ3MC02ZTU4ZDBhYjI0OTAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gmk8liZvqEC2kRE_rVlV0WIBCYYlym4E64EyX4P5hS4',
      nombre: "Harleen Quinzel",
      nombre_clave: "Harley Quinn",
      casa: "DC",
      anio_aparicion: 1992,
      descripcion_resumen: "Ex-psiquiatra convertida en villana caótica aliada del Joker.",
      descripcion_full: "Harley Quinn, antigua doctora Harleen Quinzel, fue seducida por el Joker en Arkham Asylum y se convirtió en su cómplice. Es conocida por su comportamiento impredecible y estilo extravagante."
  },
  {
      imagen:'https://i.pinimg.com/474x/31/09/96/310996dfdd532140161ff2bfdfcdc329.jpg',
      nombre: "Bane",
      nombre_clave: "Bane",
      casa: "DC",
      anio_aparicion: 1993,
      descripcion_resumen: "Enemigo de Batman con fuerza sobrehumana gracias al suero Venom.",
      descripcion_full: "Bane es un villano que combina inteligencia estratégica con una fuerza bruta aumentada por el suero Venom. Es famoso por haber quebrado la espalda de Batman en la saga 'Knightfall'."
  },
  {
      imagen:'https://i.pinimg.com/736x/32/7c/18/327c182b2dafdf993811c449200f8e93.jpg',
      nombre: "Slade Wilson",
      nombre_clave: "Deathstroke",
      casa: "DC",
      anio_aparicion: 1980,
      descripcion_resumen: "Asesino a sueldo con habilidades mejoradas y mente táctica.",
      descripcion_full: "Deathstroke, alias Slade Wilson, es un mercenario mejorado física y mentalmente. Ha enfrentado a numerosos héroes, especialmente los Teen Titans, con su gran destreza en combate."
  },
  {
      imagen:'https://i.pinimg.com/1200x/41/4a/0c/414a0c1e4efcca6b4e39b7efd37454c1.jpg',
      nombre: "Thaal Sinestro",
      nombre_clave: "Sinestro",
      casa: "DC",
      anio_aparicion: 1961,
      descripcion_resumen: "Ex Green Lantern convertido en líder del Sinestro Corps.",
      descripcion_full: "Sinestro fue uno de los mejores Linternas Verdes, pero cayó en el autoritarismo y fue expulsado. Fundó el Sinestro Corps, que utiliza el miedo como fuente de poder."
  },
  {
      imagen:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85dffe48-7e53-4b87-8853-bc2ea0ad6cdd/djjvfw7-6eb6708d-4294-4cc6-8f81-69ffc68d488e.jpg/v1/fill/w_1014,h_788,q_70,strp/black_adam_contre_aquaman_hros_dc_by_diictodon123_djjvfw7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvODVkZmZlNDgtN2U1My00Yjg3LTg4NTMtYmMyZWEwYWQ2Y2RkXC9kamp2Znc3LTZlYjY3MDhkLTQyOTQtNGNjNi04ZjgxLTY5ZmZjNjhkNDg4ZS5qcGciLCJ3aWR0aCI6Ijw9MTE1MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iYCRAX3glteix52JZnz4sbWzd22DCLXECQp8S8KIRXY',
      nombre: "Teth Adam",
      nombre_clave: "Black Adam",
      casa: "DC",
      anio_aparicion: 1945,
      descripcion_resumen: "Antiguo campeón corrompido con los poderes del Mago Shazam.",
      descripcion_full: "Black Adam es el némesis de Shazam, un ser con los mismos poderes otorgados por los dioses, pero con una visión tiránica del orden y la justicia."
  },
  {
      imagen:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89a5dbac-600c-4ec6-886f-bf464a8f8ea1/dfzg8vz-4fd00b8d-4622-4faf-9acc-ede991343a90.jpg/v1/fill/w_1014,h_788,q_70,strp/cheetah_by_nostalgicsuperfan_dfzg8vz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg5YTVkYmFjLTYwMGMtNGVjNi04ODZmLWJmNDY0YThmOGVhMVwvZGZ6Zzh2ei00ZmQwMGI4ZC00NjIyLTRmYWYtOWFjYy1lZGU5OTEzNDNhOTAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Tiaazegn11l5YFYCAEB2I4dKgy3fH0K-zsuUUe1NBYo',
      nombre: "Deborah Domaine",
      nombre_clave: "Cheetah",
      casa: "DC",
      anio_aparicion: 1943,
      descripcion_resumen: "Enemiga de Wonder Woman con velocidad y fuerza felina.",
      descripcion_full: "Cheetah es una arqueóloga maldita con poderes sobrenaturales felinos. Es una de las mayores adversarias de Wonder Woman, con una mezcla de velocidad, agilidad y ferocidad."
  },
  {
      imagen:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cccc6290-1681-499d-b44a-ca2b53c25aeb/dijpidr-dfa70608-2ace-47ae-b82b-25f7b6e2d299.jpg/v1/fit/w_1014,h_900,q_70,strp/gotham_city_super_villain_the_riddler_is_a_crimina_by_andresanon_dijpidr-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2NjY2M2MjkwLTE2ODEtNDk5ZC1iNDRhLWNhMmI1M2MyNWFlYlwvZGlqcGlkci1kZmE3MDYwOC0yYWNlLTQ3YWUtYjgyYi0yNWY3YjZlMmQyOTkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JMIqFwcsJK8KNwFNkNRSb-KZ9Mea_65zjJuELx3qbeI',
      nombre: "Edward Nigma",
      nombre_clave: "The Riddler",
      casa: "DC",
      anio_aparicion: 1948,
      descripcion_resumen: "Villano obsesionado con acertijos y juegos mentales.",
      descripcion_full: "Edward Nygma, alias Riddler, es un criminal que deja pistas y acertijos en sus crímenes, obsesionado con demostrar su superioridad intelectual sobre Batman."
  },
  {
      imagen:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dbfd9e6-f858-45e7-a042-95aa86b75aba/dit01za-489c8f7d-54af-4b27-9792-22295e32c153.png/v1/fill/w_1014,h_788,q_70,strp/juggernaut_by_bogi380_dit01za-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjEyNSIsInBhdGgiOiJcL2ZcLzhkYmZkOWU2LWY4NTgtNDVlNy1hMDQyLTk1YWE4NmI3NWFiYVwvZGl0MDF6YS00ODljOGY3ZC01NGFmLTRiMjctOTc5Mi0yMjI5NWUzMmMxNTMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sjfj_IaOvA_TfVVGu7EMpqtQfhiwWMonUjWsmtAg4W8',
      nombre: "Cain Marko",
      nombre_clave: "Juggernaut",
      casa: "Marvel",
      anio_aparicion: 1965,
      descripcion_resumen: "Villano con fuerza imparable, enemigo frecuente de los X-Men.",
      descripcion_full: "Cain Marko, conocido como Juggernaut, obtuvo sus poderes del Rubí de Cyttorak, que lo transforma en una fuerza imparable. Es medio hermano del Profesor X y ha sido tanto villano como antihéroe en varias historias de Marvel."
        }
    ];

export default villanos;