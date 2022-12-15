let randomSuccess = () => {
    return Math.random() < .5
};

// This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
        console.log('Fingers crossed... Putting the Bean Souffle in the oven');
        //Code innerhalb der setTimeout function für x Millisekunden verzögern
        setTimeout(() => {
            let success = randomSuccess();
            if (success) {
                resolve('Bean Souffle');
            } else {
                reject('Dinner is ruined!');
            }
        }, 2000);
    });
};

module.exports = cookBeanSouffle;