package lt.it.akademija.Prekes;

import lt.it.akademija.Kuponas.Coupon;

import javax.persistence.*;

@Entity
public class Preke {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @Column
    private  String pavadinimas;

    @Column
    private  int kiekis;

    @Column
    private String  matatavimoVnt;

    @Column
    private  double price;

    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;

    public Preke(String pavadinimas, int kiekis, String matatavimoVnt, double price) {
        this.pavadinimas = pavadinimas;
        this.kiekis = kiekis;
        this.matatavimoVnt = matatavimoVnt;
        this.price = price;

    }

    public Coupon getCoupon() {
        return coupon;
    }

    public void setCoupon(Coupon coupon) {
        this.coupon = coupon;
    }

    public Preke() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public int getKiekis() {
        return kiekis;
    }

    public void setKiekis(int kiekis) {
        this.kiekis = kiekis;
    }

    public String getMatatavimoVnt() {
        return matatavimoVnt;
    }

    public void setMatatavimoVnt(String matatavimoVnt) {
        this.matatavimoVnt = matatavimoVnt;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
