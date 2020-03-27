package Project;
import java.time.LocalDate;

/**
 * Objeto que se encarga de obtener la fecha actual.
 * @version 0.1.0
 * */
public class DateHandler {
	private LocalDate currentDate;
	
	public DateHandler() {
		
	}
	
	public String getCurrentDate() {
		this.currentDate = LocalDate.now();
		
		return String.format(
				"%s/%s/%s",
				this.currentDate.getDayOfMonth(),
				this.currentDate.getMonth(),
				this.currentDate.getYear()
				);
	}
}
