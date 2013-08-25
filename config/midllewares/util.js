module.exports = {
    formatDateFromObject: function (data, format) {
        if (!data)
            return '';
        if (!format)
            format = 'D MMMM YYYY'
        return moment(data).isValid() ? moment(data).format(format) : moment(data, format).format()
    },

    formatDateFromString: function (data, format) {
        if (!data)
            return '';
        if (!format)
            format = 'D MMMM YYYY'
        return moment(data).isValid() ? moment(data) : moment(data, format)
    },

    formatDateTimeFromObject: function (data, format) {
        if (!data)
            return '';
        if (!format)
            format = 'D MMMM YYYY h:mm'
        return moment(data).isValid() ? moment(data).format(format) : moment(data, format).format()
    },

    formatDateTimeFromString: function (data, format) {
        if (!data)
            return '';
        if (!format)
            format = 'D MMMM YYYY h:mm'
        return moment(data).isValid() ? moment(data) : moment(data, format)
    },

    stripScript: function (str) {
        return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    }
}
