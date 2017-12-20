package lt.it.etalonas.Kuponas;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

public class CreateCouponCommand {
    @NotNull
    @Size(min = 1)
    private String date;
    @NotNull
    @Size(min = 1)
    private String buyer;
    @NotNull
    @Size(min = 1)
    private String seller;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBuyer() {
        return buyer;
    }

    public void setBuyer(String buyer) {
        this.buyer = buyer;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }
}
