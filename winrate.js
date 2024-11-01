function calculateWinRate() {
    const desiredWinRate = parseFloat(document.getElementById("d").value);
    const wins = parseInt(document.getElementById("w").value);
    const losses = parseInt(document.getElementById("l").value);

    const totalGames = wins + losses;
    const requiredWins = Math.ceil((desiredWinRate * totalGames - wins) / (1 - desiredWinRate));
    const winRatePercent = ((wins + requiredWins) / (totalGames + requiredWins) * 100).toFixed(1);

    document.getElementById('r1').textContent = `Wins in a row: ${requiredWins}`;
    document.getElementById('r2').textContent = `Record: ${wins + requiredWins}-${losses}`;
    document.getElementById('r3').textContent = `Percent: ${winRatePercent}%`;
}
