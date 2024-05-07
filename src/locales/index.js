import { createI18n } from 'vue-i18n'


const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            message: {
                hello: 'hello world'
            },
            home: {
                hero_text: 'HIGN advances equitable health care for older adults by educating the workforce and future professionals, informing policy, advancing research, and providing community programs.'
            }
        },
        es: {
            message: {
                hello: 'Hola perra'
            },
            home: {
                hero_text: 'HIGN promueve la atención médica equitativa para los adultos mayores al educar a la fuerza laboral y a los futuros profesionales, informar las políticas, promover la investigación y brindar programas comunitarios'
            }
        }
    }
})

export { i18n }