package co.com.google.certificacion.miprimerserenity.stepsdefinitions;

import co.com.google.certificacion.miprimerserenity.steps.EndUserStep;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import net.thucydides.core.annotations.Steps;

public class BusquedaEnGoogleStepDifinition {
	
	@Steps
	EndUserStep juan;
	
	@Given("^Juan esta en el sitio de google$")
	public void juanEstaEnElSitioDeGoogle() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		juan.is_the_home_page();
	}


	@When("^el busca la palabra \"([^\"]*)\"$")
	public void elBuscaLaPalabra(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    juan.looks_for(arg1);
	}

	@Then("^el verifica la palabra \"([^\"]*)\" este en el resultado$")
	public void elVerificaLaPalabraEsteEnElResultado(String arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	}


