let currentStep = 1;
const totalSteps = 8;

document.addEventListener("DOMContentLoaded", initializeSteps);

function initializeSteps() {
    for (let i = 1; i <= totalSteps; i++) {
        document.getElementById(`button${i}`).addEventListener("click", () => showStep(i));
    }
    showStep(1);
}

function showStep(stepNumber) {
    const button = document.getElementById(`button${stepNumber}`);
    
    if (isValidStep(stepNumber, button)) {
        hideAllSteps();
        
        const currentStepElement = document.getElementById(`step${stepNumber}`);
        fadeIn(currentStepElement);
        
        if (stepNumber <= 4) currentStep = stepNumber;

        deactivateAllButtons();
        button.classList.add('pressed', 'active');
        updateButtons();
    } else {
        document.getElementById('stepFinal').style.display = 'block';
        hideAllButtons();
    }
}

function isValidStep(stepNumber, button) {
    return (stepNumber <= 4 && (stepNumber <= currentStep + 1 || button.classList.contains('pressed'))) || stepNumber > 4;
}

function hideAllSteps() {
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });
}

function fadeIn(element) {
    element.style.display = 'block';
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.opacity = '1';
    }, 10);
}

function deactivateAllButtons() {
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
}

function updateButtons() {
    for (let i = 1; i <= totalSteps; i++) {
        const button = document.getElementById(`button${i}`);
        
        if (button.classList.contains('pressed')) {
            button.disabled = false;
            continue;
        }
        
        if (i <= 4) {
            if (currentStep >= 5) continue;
            button.disabled = i !== currentStep + 1 && i !== currentStep;
        } else {
            button.disabled = false;
        }
    }
}

function hideAllButtons() {
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.style.display = 'none';
    });
}

$(document).ready(function() {
    const loginBtn = $('#loginBtn');

    initializeTooltip(loginBtn);
    handleLoginAdviceClick(loginBtn);
    addBounceAnimationOnTooltipShow(loginBtn);
    hideTooltipOnClickOutside(loginBtn);
});

function initializeTooltip(buttonElement) {
    buttonElement.tooltip({
        title: 'Iniciar Sesión',
        placement: 'top',
        trigger: 'manual'
    });
}

function handleLoginAdviceClick(buttonElement) {
    $('#login-advice').click(function() {
        if (buttonElement.data('bs.tooltip')._activeTrigger.click) {
            buttonElement.tooltip('hide');
        } else {
            buttonElement.tooltip('show');
        }
    });
}

function addBounceAnimationOnTooltipShow(buttonElement) {
    buttonElement.on('inserted.bs.tooltip', function() {
        const tooltipElement = document.querySelector('.tooltip-inner');
        if (tooltipElement) {
            tooltipElement.classList.add('bounce-tooltip');
            tooltipElement.addEventListener('animationend', () => {
                tooltipElement.classList.remove('bounce-tooltip');
            });
        }
    });
}

function hideTooltipOnClickOutside(buttonElement) {
    $(document).on('click', function(event) {
        if (event.target.id !== 'login-advice' && !$(event.target).closest('.tooltip').length) {
            buttonElement.tooltip('hide');
        }
    });
}







  