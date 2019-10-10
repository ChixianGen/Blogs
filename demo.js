setTimeout(() => {
    console.log('1'), 0
});
new Promise((ok, no) => {
console.log('11');
ok()
}).then(e => {
    console.log('then')
});

function ok() {
    console.log('33')
};