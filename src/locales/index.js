import { createI18n } from 'vue-i18n'


const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            home: {
                hero_text: 'HIGN advances equitable health care for older adults by educating the workforce and future professionals, informing policy, advancing research, and providing community programs.'
            },
            nursing: {
                title: "Mental State Exams",
                data: {

                }

            }
        },
        es: {
            home: {
                hero_text: 'HIGN promueve la atención médica equitativa para los adultos mayores al educar a la fuerza laboral y a los futuros profesionales, informar las políticas, promover la investigación y brindar programas comunitarios'
            },
            nursing: {
                title: "Exámenes del estado mental",
                data: {

                }

            }
        }
    }
})

export default i18n