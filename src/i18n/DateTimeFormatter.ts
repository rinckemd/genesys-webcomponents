import locales from './locales.json';

export class DateTimeFormatter {
    locale: typeof locales[number];

    constructor(locale: typeof locales[number]) {
        if (locales.includes(locale)) {
            this.locale = locale;
        } else {
            console.warn(`Locale "${locale}" is not supported. Falling back to English translation.`);
            this.locale = 'en';
        }
    }

    formatDate(datetime: Date, format: string) : string {
        const options: any = { dateStyle: format };
        return new Intl.DateTimeFormat(this.locale, options).format(datetime);
    }

    formatTime(datetime: Date, format: string) : string {
        const options: any = { timeStyle: format };
        return new Intl.DateTimeFormat(this.locale, options).format(datetime);
    }

    formatDateTime(datetime: Date, format: string) : string {
        const options: any = { dateStyle: format, timeStyle: format };
        return new Intl.DateTimeFormat(this.locale, options).format(datetime);
    }
}
