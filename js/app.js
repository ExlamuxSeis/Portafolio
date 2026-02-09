const { createApp } = Vue;

createApp({
    data() {
        return {
            theme: 'dark',
            activeDesign: null,
            blogui: [
                {
                    title: 'Terminos y condiciones',
                    image: 'assets/img/TyC.webp',
                    description: 'Enfocado en ser un diseño amigable para el usuario. Aqui se dio solución a un diseño solido con la interfaz, ya que anteriormente tenía un modal pero no era muy agradable.',
                    figma: 'https://www.figma.com/design/xdRR2TzpdHs4FKxbobLAab/Dulfin-Lubricantes?node-id=0-1&p=f&t=gD8299HfZwRhMJ2Z-0'
                },
                {
                    title: 'Comntarios y respuestas',
                    image: 'assets/img/Comentarios-Respuesta.webp',
                    description: 'Una solución de como ver las respuestas de los comentarios, un diseño basado en la interfaz de Facebook.',
                    figma: 'https://www.figma.com/design/xdRR2TzpdHs4FKxbobLAab/Dulfin-Lubricantes?node-id=0-1&p=f&t=gD8299HfZwRhMJ2Z-0'
                },
                {
                    title: 'Configuración y Bloqueos',
                    image: 'assets/img/lista de bloqueo.webp',
                    description: 'Aquí el enfoque era tener una sección para ver que usuarios tenía bloqueados y la opción para desbloquearlos',
                    figma: 'https://www.figma.com/design/xdRR2TzpdHs4FKxbobLAab/Dulfin-Lubricantes?node-id=0-1&p=f&t=gD8299HfZwRhMJ2Z-0'
                },
                {
                    title: 'Buscar usuario para bloquear',
                    image: 'assets/img/Busq-bloq-usuarios.webp',
                    description: 'Una solución dentro de la interfaz de bloqueo, fue implentar un motor de busqueda por nombre o usuario para bloquear.',
                    figma: 'https://www.figma.com/design/xdRR2TzpdHs4FKxbobLAab/Dulfin-Lubricantes?node-id=0-1&p=f&t=gD8299HfZwRhMJ2Z-0'
                }
            ]
        }
    },
    mounted() {
        const saved = localStorage.getItem('theme');
        if (saved) {
            this.theme = saved;
            document.body.classList.toggle('light', saved === 'light');
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            });
        });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            document.body.classList.toggle('light', this.theme === 'light');
            localStorage.setItem('theme', this.theme);
        },
        openModal(item) {
            this.activeDesign = item;
        }
    }
}).mount('#app');
