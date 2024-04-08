let form = document.forms['main'],
    steps = document.querySelectorAll('.step'),
    gender, activity, age, growth, weight, dailyCalorie;
document.querySelector('.calculator-gender__items').addEventListener('click', genderFunc);

function genderFunc(event) {
    document.querySelectorAll('.calculator-gender__item').forEach(el => {
        el.classList.remove('action');
    })
    if (event.target.parentElement.closest('.calculator-gender__item')) {
        event.target.parentElement.closest('.calculator-gender__item').classList.add('action');
    }
}

document.querySelector('#step-1-btn').addEventListener('click', (event) => {
    event.preventDefault();
    steps[0].style.display = 'none';
    steps[1].style.display = 'inherit';
    gender = form.gender.value;
});


document.querySelector('.calculator-activity__items').addEventListener('click', activityFunc);

function activityFunc(event) {
    document.querySelectorAll('.calculator-activity__item').forEach(el => {
        el.classList.remove('action');
    })
    if (event.target.parentElement.closest('.calculator-activity__item')) {
        event.target.parentElement.closest('.calculator-activity__item').classList.add('action');
    }
}

document.querySelector('#step-2-btn').addEventListener('click', (event) => {
    event.preventDefault();
    steps[1].style.display = 'none';
    steps[2].style.display = 'inherit';
    activity = form.activity.value;
});

document.querySelectorAll('.data__block-item input').forEach(el => {
    el.addEventListener('blur', checkData);
})

function checkData(event) {
    if (!event.target.validity.rangeOverflow && !event.target.validity.rangeUnderflow) {
        if (event.target.name === 'age' && Boolean(event.target.value)) {
            age = event.target.value;
        } else if (event.target.name === 'growth' && Boolean(event.target.value)) {
            growth = event.target.value;
        } else if (event.target.name === 'weight' && Boolean(event.target.value)) {
            weight = event.target.value;
        }
    } else {
        event.target.value = '';
    }
}

document.querySelector('#step-result').addEventListener('click', (event) => {
    event.preventDefault();
    steps[2].style.display = 'none';
    document.querySelector('.calculator-result').style.display = 'inherit';
    const index = (Math.pow((weight / growth), 2) * 100).toFixed(1);
    document.querySelector('#imt-value').textContent = String(index);
    document.querySelector('#nc').textContent = String(getDailyCalorie());
});

function getDailyCalorie() {
    if (gender === 'man') {
        return dailyCalorie = Math.floor((((10 * weight) + (6.25 * growth) - (5 * age) + 5) * activity));
    } else {
        return dailyCalorie = Math.floor((((10 * weight) + (6.25 * growth) - (5 * age) - 161) * activity));
    }
}