const BLACKLIST = ['password', '123456', '123456789', '12345678', '12345'];

function checkPasswordStrength(password) {
    const length_error = password.length < 12;
    const digit_error = !/\d/.test(password);
    const uppercase_error = !/[A-Z]/.test(password);
    const lowercase_error = !/[a-z]/.test(password);
    const symbol_error = !/[!@#$%^&*()_+.'"`: ,;\\\/]/.test(password);
    const blacklist_error = BLACKLIST.includes(password);

    const password_ok = !(length_error || digit_error || uppercase_error || lowercase_error || symbol_error || blacklist_error);

    return {
        password_ok,
        length_error,
        digit_error,
        uppercase_error,
        lowercase_error,
        symbol_error,
        blacklist_error
    };
}

document.getElementById('password').addEventListener('input', function(e) {
    const password = e.target.value;
    const result = checkPasswordStrength(password);
    let resultText = 'Password Strength: ' + (result.password_ok ? 'Strong' : 'Weak') + '<br>';
    let resultClass = result.password_ok ? 'strong' : 'weak';
    if (result.length_error) resultText += 'Password must be at least 12 characters long.<br>';
    if (result.digit_error) resultText += 'Password must contain at least one digit.<br>';
    if (result.uppercase_error) resultText += 'Password must contain at least one uppercase letter.<br>';
    if (result.lowercase_error) resultText += 'Password must contain at least one lowercase letter.<br>';
    if (result.symbol_error) resultText += 'Password must contain at least one special character.<br>';
    if (result.blacklist_error) resultText += 'Password is too common.<br>';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultText;
    resultDiv.className = resultClass;
});
