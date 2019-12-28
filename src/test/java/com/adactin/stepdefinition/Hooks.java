package com.adactin.stepdefinition;

import java.io.IOException;

import com.adactin.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks extends BaseClass {
	
	@Before
	public static void beforeScenario(Scenario scenario) {
		System.out.println("Scenario Name:  "+scenario.getName());

	}

	@After

	public static void AfterScenario(Scenario scenario) throws IOException {
		if (scenario.isFailed()) {
			String id = scenario.getId();
			System.out.println("Scenario id is" + id);
			screenshot(id);
		}
		System.out.println("        Status:"+scenario.getStatus());

	}
}
	/*@Before("@searchhotel")
	public void beforeLastScenario(Scenario scenario) {
		System.out.println("========This will execute before @searchhotel3=========");
		System.out.println("Scenario Name:" + scenario.getName());*/
	
