
        const images = 
        [['eventi.jpg', 'eventiB.jpg'],
         ['documenti.jpg', 'documentiB.jpg'],
            ['preparare la valigia.jpg', 'preparare la valigiaB.jpg'],
            ['destinazioni.jpg', 'destinazioniB.jpg'],
            ['pernottare.jpg', 'pernottareB.jpg'],
            ['trasporto.jpg', 'trasportoB.jpg']
        ];

        function cambiaImmagine(element, rowIndex, boxIndex) {
            const index = rowIndex * 3 + boxIndex;
            element.style.backgroundImage = "url('" + images[index][1] + "')";
        }

        function resettaImmagine(element, rowIndex, boxIndex) {
            const index = rowIndex * 3 + boxIndex;
            element.style.backgroundImage = "url('" + images[index][0] + "')";
        }
        function cambiaImmagine(element) {
            element.style.backgroundImage = "url('spiaggia2.jpg')";
        }

        function resettaImmagine(element) {
            element.style.backgroundImage = "url('spiaggia.jpg')";
        }

        document.addEventListener('copy', function (e) {
    e.preventDefault();
});