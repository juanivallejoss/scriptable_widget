// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: university;

const theme = {
    backgroundColor: new Color("#00289a"), //change your colors here
    titleColor: new Color ("#f66e76"),
    iconColor: Color.white(),
};

function createEntityWidget() {

    let widget = new ListWidget();
    widget.backgroundColor = theme.backgroundColor;
    widget.setPadding(16, 16, 16, 16);

    // Título
    let titleStack = widget.addStack();
    titleStack.layoutHorizontally();
    
    let title = titleStack.addText("Bank Entity"); //change your title here
    title.textColor = theme.titleColor;
    title.font = Font.boldSystemFont(18);
    
    titleStack.addSpacer();    

    widget.addSpacer(4);

    // Debit Cards
    let debitStack = widget.addStack();
    debitStack.layoutVertically(); 
    
    let debitCards = ["5244", "1234"]; // Debit cards end numbers
    for (let card of debitCards) {
        let cardRow = debitStack.addStack(); 
        cardRow.layoutHorizontally(); 
    
        let cardIcon = SFSymbol.named("creditcard");
        let cardImage = cardRow.addImage(cardIcon.image);
        cardImage.imageSize = new Size(14, 14);
        cardImage.tintColor = theme.iconColor;
    
        cardRow.addSpacer(4);
    
        let cardEnding = cardRow.addText(card);
        cardEnding.textColor = theme.titleColor;
        cardEnding.font = Font.boldSystemFont(14);
    
        debitStack.addSpacer(4); 
    }
    
    widget.addSpacer(4);
    
    // Credit Cards
    let creditStack = widget.addStack();
    creditStack.layoutVertically(); 
    
    let creditCards = ["4353", "3243"]; // Credit cards end numbers
    for (let card of creditCards) {
        let cardRow = creditStack.addStack();
        cardRow.layoutHorizontally(); 
    
        let cardIcon = SFSymbol.named("creditcard.fill");
        let cardImage = cardRow.addImage(cardIcon.image);
        cardImage.imageSize = new Size(14, 14);
        cardImage.tintColor = theme.iconColor;
    
        cardRow.addSpacer(4);
    
        let cardEnding = cardRow.addText(card);
        cardEnding.textColor = theme.titleColor;
        cardEnding.font = Font.boldSystemFont(14);
    
        creditStack.addSpacer(4); 
    }
    
    return widget;
}

if (config.runsInWidget) {
    let widget = createEntityWidget();
    Script.setWidget(widget);
    Script.complete();
}
