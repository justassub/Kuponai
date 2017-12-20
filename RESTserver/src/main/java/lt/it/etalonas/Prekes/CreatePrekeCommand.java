package lt.it.etalonas.Prekes;

public class CreatePrekeCommand {
    String pavadinimas;
    double price;
    String matavimoVnt;
    int kiekis;

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getMatavimoVnt() {
        return matavimoVnt;
    }

    public void setMatavimoVnt(String matavimoVnt) {
        this.matavimoVnt = matavimoVnt;
    }

    public int getKiekis() {
        return kiekis;
    }

    public void setKiekis(int kiekis) {
        this.kiekis = kiekis;
    }
}
