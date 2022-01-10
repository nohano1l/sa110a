using NUnit.Framework;

public class TestScript
{
    [Test]
    [TestCase(10, '+', 2, 12)]
    [TestCase(10, '-', 2, 8)]
    [TestCase(10, '*', 2, 20)]
    [TestCase(500, '/', 10, 50)]
    public void Calculate_Test(float x, char pointer, float y, float result)
    {
        var Calculator = new Calculator(x, y, pointer);

        var score = Calculator.ScoreCount();

        Assert.That(score, Is.EqualTo(result));
    }
}
public class Calculator
{
    float x;
    float y;
    char pointer;

    public Calculator(float x, float y, char pointer)
    {
        this.x = x;
        this.y = y;
        this.pointer = pointer;
    }

    public float ScoreCount()
    {
        float _value = 0;

        switch (pointer)
        {
            case '+':
                _value = x + y;
                break;
            case '-':
                _value = x - y;
                break;
            case '*':
                _value = x * y;
                break;
            case '/':
                _value = (x / y);
                break;

            default:
                break;
        }


        return _value;
    }
}